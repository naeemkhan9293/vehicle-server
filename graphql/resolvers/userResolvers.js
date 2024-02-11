import { GraphQLError } from "graphql";
import {
  validateLoginUser,
  validateRegisterUser,
} from "../../utils/validators.js";
import User from "../../model/user.js";
import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ApolloServerErrorCode } from "@apollo/server/errors";
import auth from "../../utils/auth.js";
import { createWriteStream } from "fs";
import { join, dirname } from "path";
import { v4 as uuidv4 } from "uuid";

export const userMutations = {
  //* ------------------Reigster user--------------------
  async registerUser(
    _,
    { registeruser: { username, password, email, phone } }
  ) {
    //! checking for empty
    const { valid, errors } = validateRegisterUser(
      username,
      password,
      email,
      phone
    );
    if (!valid) {
      throw new GraphQLError("Error", { extensions: errors });
    }

    //! validating that user is exist already
    const user = await User.findOne({ email });
    if (user) {
      throw new GraphQLError("user already exit", {
        extensions: {
          code: "FORBIDDEN",
          http: {
            status: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
          },
        },
      });
    }

    //* creating new user
    password = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      password,
      email,
      phone,
      createAt: new Date().toISOString(),
    });

    const res = await newUser.save();
    if (res) {
      return "Account has been created";
    }
  },

  //* ------------------Login user--------------------
  async loginUser(_, { loginuser: { email, password } }) {
    try {
      //! validate user
      const { valid, errors } = validateLoginUser(email, password);
      if (!valid) {
        throw new GraphQLError("Error", { extensions: errors });
      }

      const user = await User.findOne({ email });
      if (!user) {
        throw new GraphQLError("wrong credentials");
      }

      const match = bcrypt.compare(password, user.password);
      if (!match) {
        throw new GraphQLError("wrong credentials");
      }

      const token = generateToken(user);

      return {
        token: token,
      };
    } catch ({ message }) {
      throw new GraphQLError(message);
    }
  },

};

export const userQuery = {
  //* ------------------Get user detail --------------------
  async getUser(_, args, context) {
    const { id } = auth(context);
    const user = await User.findById(id);
    return user;
  },
};

function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY,
    { expiresIn: "2h" }
  );
}

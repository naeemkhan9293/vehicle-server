import { GraphQLError } from "graphql";

import jwt from "jsonwebtoken";

export default (context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader;
    if (token) {
      try {
        const userid = jwt.verify(token, process.env.SECRET_KEY);
        return userid;
      } catch (err) {
        throw new GraphQLError("Not Authenticated");
      }
    }
    throw new Error("Authentication token must be provided");
  }
  throw new Error("Authentication token must be provided");
};

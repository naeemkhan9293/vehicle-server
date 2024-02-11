import express, { static as static_ } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

//* ---------------- files import --------------
import { connectMongo } from "./db/db.js";
import { typeDefs } from "./graphql/types/typeDefs.js";
import { resolvers } from "./graphql/resolvers/index.js";
import userFileUpload from "./router/userFileUpload.js";

// ----------------------------------
await connectMongo();

const app = express();
const port = 4000;
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use("/images/vehicle", static_("public/images/vehicle"));
app.use(
  "/images/user-profile-images",
  static_("public/images/user-profile-images")
);

app.use(
  cors()
);
app.use(bodyParser.json());
app.use(userFileUpload);

app.use(
  "/graphql",
  expressMiddleware(server, {
    context: async ({ req }) => ({ req }),
  })
);

// httpServer.listen(port,() => {
//   console.log(`🚀 Server ready at http://localhost:${port}`);
// },);
await new Promise((resolve) => httpServer.listen({ port: port }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

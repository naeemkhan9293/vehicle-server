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

// app.use("/images", static_("public/images/user"));
app.use("/images/vehicle", static_("public/images/vehicle"));

// app.use(cors(), bodyParser.json(), expressMiddleware(server));

// app.use(
//   cors({
//     origin: ["https://c2b6jtbx-3000.inc1.devtunnels.ms", "http://localhost:3000/"],
//     credentials: true,
//   }),
//   bodyParser.json(),
//   expressMiddleware(server)
// );
app.use(cors(), bodyParser.json(), expressMiddleware(server));

// app.use(bodyParser.json());

httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});

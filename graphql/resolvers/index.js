import { vehicleQuery } from "./vehicleResolvers.js";
import { userMutations, userQuery } from "./userResolvers.js";
export const resolvers = {
  Query: {
    ...vehicleQuery,
    ...userQuery
  },
  Mutation: {
    ...userMutations,
  },
};

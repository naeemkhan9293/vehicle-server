import { vehicleQuery } from "./vehicleResolvers.js";

export const resolvers = {
  Query: {
    ...vehicleQuery,
  },
};

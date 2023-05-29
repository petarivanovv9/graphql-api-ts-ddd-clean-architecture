import { GqlResolvers, GqlModule } from "../../gqlModule";

const viewer = {
  id: "GQL-ID-1",
  name: "Random User",
  email: "random@random.org",
};

const resolvers: GqlResolvers = {
  Query: {
    viewer: async () => {
      return viewer;
    },
  },
};

export const gqlModule: GqlModule = { resolvers };

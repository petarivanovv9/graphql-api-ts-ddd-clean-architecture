import { GqlResolvers, GqlModule } from "../../gqlModule";

const viewer = {
  id: "GQL-ID-1",
  name: "Random User",
  email: "random@random.org",
};

const resolvers: GqlResolvers = {
  Query: {
    viewer: async () => {
      console.log("...viewer...");

      // TODO:
      // Add custom model for the User type (mapper),
      // since TS complains that there're no `cardPaymentProfiles`
      return viewer as any;
    },
  },
};

export const gqlModule: GqlModule = { resolvers };

import { GqlResolvers, GqlModule } from "../../gqlModule";

const viewerCardPaymentProfiles = [
  {
    id: "GQL-ID-CPM-1",
    firstName: "Random",
  },
];

const resolvers: GqlResolvers = {
  User: {
    cardPaymentProfiles: async (user) => {
      console.log("...cardPaymentProfiles...", user);

      return viewerCardPaymentProfiles;
    },
  },
};

export const gqlModule: GqlModule = { resolvers };

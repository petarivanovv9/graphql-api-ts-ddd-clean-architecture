import { GqlResolvers, GqlModule } from "../../gqlModule";
import { CardPaymentProfileQueries } from "../domain/queries/cardPaymentProfileQueries";

const resolvers: GqlResolvers = {
  Account: {
    cardPaymentProfiles: async (account) => {
      const cardPaymentProfileQueries = new CardPaymentProfileQueries();
      return cardPaymentProfileQueries.getByAccount(account.email);
    },
  },
};

export const gqlModule: GqlModule = { resolvers };

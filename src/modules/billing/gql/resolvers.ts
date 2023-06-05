import { GqlResolvers, GqlModule } from '../../gqlModule';
import { DeleteCardPaymentProfile } from '../domain/mutations/deleteCardPaymentProfile';
import { CardPaymentProfileQueries } from '../domain/queries/cardPaymentProfileQueries';
import { CardPaymentProfileRepo } from '../repositories/cardPaymentProfiles/cardPaymentProfileRepo';

const resolvers: GqlResolvers = {
  Mutation: {
    deleteCardPaymentProfile: async (_, { input }, __) => {
      const mutation = new DeleteCardPaymentProfile();
      return mutation.execute(input);
    },
  },
  Account: {
    cardPaymentProfiles: async (account) => {
      // Note: We can use Dependency Injection,
      // so we can inject the needed dependencies easily,
      // instead of passing it like this.
      // Let's keep it as simple as possible for the example.
      const cardPaymentProfileRepo = new CardPaymentProfileRepo();
      const cardPaymentProfileQueries = new CardPaymentProfileQueries(
        cardPaymentProfileRepo,
      );
      return cardPaymentProfileQueries.getByAccount(account.email);
    },
  },
};

export const gqlModule: GqlModule = { resolvers };

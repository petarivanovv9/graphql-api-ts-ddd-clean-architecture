import { container } from 'tsyringe';
import { GqlResolvers, GqlModule } from '../../gqlModule';
import { DeleteCardPaymentProfile } from '../domain/mutations/deleteCardPaymentProfile';
import { CardPaymentProfileQueries } from '../domain/queries/cardPaymentProfileQueries';

const resolvers: GqlResolvers = {
  Mutation: {
    deleteCardPaymentProfile: async (_, { input }, __) => {
      const mutation = new DeleteCardPaymentProfile();
      return mutation.execute(input);
    },
  },
  Account: {
    cardPaymentProfiles: async (account) => {
      const cardPaymentProfileQueries = container.resolve(
        CardPaymentProfileQueries,
      );

      return cardPaymentProfileQueries.getByAccount(account.email);
    },
  },
};

export const gqlModule: GqlModule = { resolvers };

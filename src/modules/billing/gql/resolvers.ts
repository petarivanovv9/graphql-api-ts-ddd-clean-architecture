import { container } from 'tsyringe';
import { GqlResolvers, GqlModule } from '../../gqlModule';
import { DeleteCardPaymentProfile } from '../domain/mutations/deleteCardPaymentProfile';
import { CardPaymentProfileQueries } from '../domain/queries/cardPaymentProfileQueries';

const resolvers: GqlResolvers = {
  Mutation: {
    deleteCardPaymentProfile: async (_, { input }, __) => {
      const mutation = container.resolve(DeleteCardPaymentProfile);
      return mutation.execute(input);
    },
  },
  Account: {
    cardPaymentProfiles: async (account) => {
      const query = container.resolve(CardPaymentProfileQueries);
      return query.getByAccount(account.email);
    },
  },
};

export const gqlModule: GqlModule = { resolvers };

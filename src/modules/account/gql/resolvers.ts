import { container } from 'tsyringe';
import { GqlResolvers, GqlModule } from '../../gqlModule';
import { UserDto } from '../api';
import { AccountQueries } from '../domain/queries/accountQueries';

const viewerData: UserDto = {
  id: 'GQL-ID-U-1',
  name: 'Random User',
  email: 'random@foocompany.org',

  accountId: 'GQL-ID-A-1',
};

const resolvers: GqlResolvers = {
  Query: {
    viewer: async () => {
      return viewerData;
    },
  },

  User: {
    account: async (user, _, __) => {
      const query = container.resolve(AccountQueries);
      return query.getAccount(user.accountId);
    },
  },

  // Account: {
  //   users: (...) => {
  //       TODO: implement
  //   },
  // },
};

export const gqlModule: GqlModule = { resolvers };

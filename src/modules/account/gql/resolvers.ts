import { GqlResolvers, GqlModule } from "../../gqlModule";
import { AccountService } from "../domain/services/accountService";

const viewer = {
  id: "GQL-ID-U-1",
  name: "Random User",
  email: "random@foocompany.org",

  accountId: "GQL-ID-A-1",
};

const resolvers: GqlResolvers = {
  Query: {
    viewer: async () => {
      return viewer;
    },
  },

  User: {
    account: async (user, _, __) => {
      const accountService = new AccountService();
      const account = await accountService.getAccount(user.accountId);
      return account;
    },
  },

  // Account: {
  //   users: (...) => {
  //       TODO: implement
  //   },
  // },
};

export const gqlModule: GqlModule = { resolvers };

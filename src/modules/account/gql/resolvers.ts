import { GqlResolvers, GqlModule } from "../../gqlModule";
import { UserDto } from "../api";
import { AccountService } from "../domain/services/accountService";

const viewerData: UserDto = {
  id: "GQL-ID-U-1",
  name: "Random User",
  email: "random@foocompany.org",

  accountId: "GQL-ID-A-1",
};

const resolvers: GqlResolvers = {
  Query: {
    viewer: async () => {
      return viewerData;
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

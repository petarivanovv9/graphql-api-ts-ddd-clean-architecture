const accountsData = [
  {
    id: "GQL-ID-A-1",
    email: "big-boss@foocompany.org",
    company: "Foo Company",
    vatNumber: "BG111111111",
  },
  {
    id: "GQL-ID-A-2",
    email: "random-boss@randomcompany.org",
    company: "Random Company",
    vatNumber: "BG222222222",
  },
];

export class AccountService {
  constructor() {}

  // Note: could be static, but ...
  async getAccount(id: string) {
    //
    // Transaction Script Pattern
    //
    const account = accountsData.find((acc) => acc.id === id);

    if (!account) {
      throw new Error(`Cannot load account for user with id: ${id}.`);
    }

    return account;
  }
}

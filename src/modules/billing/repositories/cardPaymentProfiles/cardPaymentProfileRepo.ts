const cardPaymentProfilesData = [
  {
    id: "GQL-ID-CPM-1",
    firstName: "Random",
    accountEmail: "big-boss@foocompany.org",
  },
];

export class CardPaymentProfileRepo {
  constructor() {}

  async getByAccount(accountEmail: string) {
    const cardPaymentProfiles = cardPaymentProfilesData.filter(
      (x) => x.accountEmail === accountEmail
    );

    return cardPaymentProfiles;
  }
}

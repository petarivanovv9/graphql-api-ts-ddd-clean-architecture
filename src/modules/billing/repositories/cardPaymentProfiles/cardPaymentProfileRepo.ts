import { CardPaymentProfileMapper } from "./cardPaymentProfileMapper";

const cardPaymentProfilesData = [
  {
    id: "GQL-ID-CPM-1",
    card: {
      first_name: "Random",
    },
    accountEmail: "big-boss@foocompany.org",
  },
];

export class CardPaymentProfileRepo {
  constructor() {}

  async getByAccount(accountEmail: string) {
    const cardPaymentProfiles = cardPaymentProfilesData
      .filter((x) => x.accountEmail === accountEmail)
      .map((x) => CardPaymentProfileMapper.toDomain(x));

    return cardPaymentProfiles;
  }
}

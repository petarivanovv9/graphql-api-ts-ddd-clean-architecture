import { CardPaymentProfileMapper } from './cardPaymentProfileMapper';

const cardPaymentProfilesData = [
  {
    id: 'GQL-ID-CPM-1',
    card: {
      first_name: 'Random',
    },
    accountEmail: 'big-boss@foocompany.org',
  },
];

export class CardPaymentProfileRepo {
  async getByAccount(accountEmail: string) {
    const cardPaymentProfiles = cardPaymentProfilesData
      .filter((x) => x.accountEmail === accountEmail)
      .map((x) => CardPaymentProfileMapper.toDomain(x));

    return cardPaymentProfiles;
  }

  async delete(paymentProfileId: string | number) {
    //
    // delete card payment profile
    //
    console.log('deleting card payment profile with id: ', paymentProfileId);
  }
}

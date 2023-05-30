import { CardPaymentProfileRepo } from '../../repositories/cardPaymentProfiles/cardPaymentProfileRepo';

export class CardPaymentProfileQueries {
  private cardPaymentProfileRepo;

  constructor() {
    this.cardPaymentProfileRepo = new CardPaymentProfileRepo();
  }

  async getByAccount(accountNumber: string) {
    const cardPaymentProfiles = await this.cardPaymentProfileRepo.getByAccount(
      accountNumber,
    );

    return cardPaymentProfiles;
  }
}

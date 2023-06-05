import { CardPaymentProfileRepo } from '../../repositories/cardPaymentProfiles/cardPaymentProfileRepo';

export class CardPaymentProfileQueries {
  private cardPaymentProfileRepo;

  // Note: should use Dependency Injection
  // so we can inject the needed dependencies easily
  constructor(cardPaymentProfileRepo: CardPaymentProfileRepo) {
    this.cardPaymentProfileRepo = cardPaymentProfileRepo;
  }

  async getByAccount(accountNumber: string) {
    const cardPaymentProfiles = await this.cardPaymentProfileRepo.getByAccount(
      accountNumber,
    );

    return cardPaymentProfiles;
  }
}

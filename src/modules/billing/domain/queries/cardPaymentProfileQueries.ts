import { injectable } from 'tsyringe';
import { CardPaymentProfileRepo } from '../../repositories/cardPaymentProfiles/cardPaymentProfileRepo';

@injectable()
export class CardPaymentProfileQueries {
  constructor(private cardPaymentProfileRepo: CardPaymentProfileRepo) {}

  async getByAccount(accountNumber: string) {
    const cardPaymentProfiles = await this.cardPaymentProfileRepo.getByAccount(
      accountNumber,
    );

    return cardPaymentProfiles;
  }
}

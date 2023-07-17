import { Lifecycle, scoped } from 'tsyringe';
import { CardPaymentProfileRepo } from '../../repositories/cardPaymentProfiles/cardPaymentProfileRepo';

@scoped(Lifecycle.ContainerScoped)
export class CardPaymentProfileQueries {
  constructor(private cardPaymentProfileRepo: CardPaymentProfileRepo) {}

  async getByAccount(accountNumber: string) {
    const cardPaymentProfiles = await this.cardPaymentProfileRepo.getByAccount(
      accountNumber,
    );

    return cardPaymentProfiles;
  }
}

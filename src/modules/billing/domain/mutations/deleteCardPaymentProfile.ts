import { CardPaymentProfileRepo } from '../../repositories/cardPaymentProfiles/cardPaymentProfileRepo';

type DeleteCardPaymentProfileParams = {
  // Note: only to satisfy TypeScript for the example
  id: string | number;
};

export class DeleteCardPaymentProfile {
  private cardPaymentProfileRepo;

  constructor() {
    this.cardPaymentProfileRepo = new CardPaymentProfileRepo();
  }

  async execute(params: DeleteCardPaymentProfileParams) {
    //
    // do some business logic here
    // or use CardPaymentProfileService service
    //

    await this.cardPaymentProfileRepo.delete(params.id);

    return { _noop: true };
  }
}

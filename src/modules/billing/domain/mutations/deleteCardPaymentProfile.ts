import { Lifecycle, scoped } from 'tsyringe';
import { CardPaymentProfileRepo } from '../../repositories/cardPaymentProfiles/cardPaymentProfileRepo';

type DeleteCardPaymentProfileParams = {
  // Note: only to satisfy TypeScript for the example
  id: string | number;
};

@scoped(Lifecycle.ContainerScoped)
export class DeleteCardPaymentProfile {
  constructor(private cardPaymentProfileRepo: CardPaymentProfileRepo) {}

  async execute(params: DeleteCardPaymentProfileParams) {
    //
    // do some business logic here
    // or use CardPaymentProfileService service
    //

    await this.cardPaymentProfileRepo.delete(params.id);

    return { _noop: true };
  }
}

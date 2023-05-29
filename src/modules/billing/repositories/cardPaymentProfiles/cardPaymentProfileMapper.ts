import { CardPaymentProfile } from "../../domain/models/cardPaymentProfile";

interface PaymentSource {
  id: string;
  card: {
    first_name?: string;
    last_name?: string;
  };
}

export class CardPaymentProfileMapper {
  static toDomain(paymentSource: PaymentSource) {
    const { card } = paymentSource;

    return CardPaymentProfile.create(
      {
        firstName: card.first_name ?? "",
        lastName: card.last_name ?? "",
      },
      paymentSource.id
    );
  }
}

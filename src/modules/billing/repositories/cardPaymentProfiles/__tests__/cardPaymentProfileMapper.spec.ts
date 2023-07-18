//
// Unit tests for the CardPaymentProfileMapper
//

import { CardPaymentProfileMapper } from '../cardPaymentProfileMapper';

const simpleCardPaymentProfile = {
  id: 'simple-card-payment-id',
  firstName: 'John',
  lastName: 'Doe',
};

const generatePaymentSource = ({
  id = 'simple-card-payment-id',
  paymentProfile = simpleCardPaymentProfile,
} = {}) => ({
  id,
  card: {
    first_name: paymentProfile.firstName,
    last_name: paymentProfile.lastName,
  },
});

describe('CardPaymentProfileMapper', () => {
  it('toDomain with simple payment source', () => {
    const cardPaymentProfile = CardPaymentProfileMapper.toDomain(
      generatePaymentSource(),
    );

    expect(cardPaymentProfile.toJSON()).toMatchObject(simpleCardPaymentProfile);
  });
});

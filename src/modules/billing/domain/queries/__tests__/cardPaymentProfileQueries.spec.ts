//
// Unit tests for the CardPaymentProfileQueries
// - all dependencies are mocked
// - only testing the logic inside this class
//

import { mockInstance } from '../../../../../tests/utils';
import { CardPaymentProfileRepo } from '../../../repositories/cardPaymentProfiles/cardPaymentProfileRepo';
import { CardPaymentProfile } from '../../models/cardPaymentProfile';
import { CardPaymentProfileQueries } from '../cardPaymentProfileQueries';

const setupCardPaymentProfileQueries = () => {
  const cardPaymentProfileRepo = mockInstance(CardPaymentProfileRepo);

  const cardPaymentProfileQueries = new CardPaymentProfileQueries(
    cardPaymentProfileRepo,
  );

  return {
    cardPaymentProfileRepo,
    cardPaymentProfileQueries,
  };
};

describe('CardPaymentProfileQueries', () => {
  describe('getByAccount', () => {
    it('should return card payment profiles', async () => {
      const { cardPaymentProfileQueries, cardPaymentProfileRepo } =
        setupCardPaymentProfileQueries();

      const cardPaymentProfile = CardPaymentProfile.create(
        {
          firstName: 'john',
          lastName: 'doe',
        },
        '123',
      );

      cardPaymentProfileRepo.getByAccount.mockResolvedValue([
        cardPaymentProfile,
      ]);

      const result = await cardPaymentProfileQueries.getByAccount('GQL-ID-A-1');

      expect(result[0].firstName).toEqual('john');
    });
  });
});

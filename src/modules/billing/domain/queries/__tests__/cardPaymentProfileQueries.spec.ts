//
// Unit tests for the CardPaymentProfileQueries
// - all dependencies are mocked
// - only testing the logic inside this class
//

// const setupCardPaymentProfileQueries = () => {
//   const cardPaymentProfileRepo = mockInstance(CardPaymentProfileRepo);
//   const cardPaymentProfileQueries = new CardPaymentProfileQueries(
//     cardPaymentProfileRepo,
//   );
//   return {
//     cardPaymentProfileQueries,
//   };
// };

// describe('CardPaymentProfileQueries', () => {
//   describe('getByAccount', () => {
//     it('should return card payment profiles', async () => {
//       const { cardPaymentProfileQueries, cardPaymentProfileRepo } =
//         setupCardPaymentProfileQueries();

//       const result = cardPaymentProfileQueries.getByAccount('GQL-ID-A-1');

//       expect(cardPaymentProfileRepo.getByAccount).toHaveBeenCalledWith(
//         'GQL-ID-A-1',
//       );

//       expect(...);
//     });
//   });
// });

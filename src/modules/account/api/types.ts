export interface UserDto {
  // Ideally, we should use `number` for the ID,
  // since this should be the DB ID (number).
  //
  // For now, that's the GraphQL ID (string).
  id: string;
  name: string;
  email: string;
}

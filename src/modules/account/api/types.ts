export interface UserDto {
  // Ideally, we should use `number` for the ID,
  // since this should be the DB ID (number).
  //
  // For now, that's the GraphQL ID (string).
  id: string;
  name: string;
  email: string;

  accountId: string;
}

export interface AccountDto {
  // Ideally, we should use `number` for the ID,
  // since this should be the DB ID (number).
  //
  // For now, that's the GraphQL ID (string).
  id: string;
  email: string;
  company: string;
  vatNumber: string | null;
}

import { AccountService } from '../domain/services/accountService';
import { AccountDto, UserDto } from './types';

export class AccountModule {
  getUserById(id: number): Promise<UserDto | undefined> {
    // TODO:
    // >>> IMPLEMENT

    console.log('calling `getUserById` with `id` ', id);

    return Promise.resolve(undefined);
  }

  getAccountByCompany(company: string): Promise<AccountDto | undefined> {
    const accountService = new AccountService();
    return accountService.getAccountByCompany(company);
  }
}

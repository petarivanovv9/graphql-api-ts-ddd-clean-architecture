import { UserDto } from "./types";

export class AccountModule {
  constructor() {}

  getUserById(id: number): Promise<UserDto | undefined> {
    // TODO:
    // >>> IMPLEMENT

    console.log("calling `getUserById` with `id` ", id);

    return Promise.resolve(undefined);
  }
}

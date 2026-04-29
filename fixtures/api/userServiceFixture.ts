import { test as base } from "@playwright/test";
import { APIClient } from "../../src/api/userService/apiClient";
import { UserService } from "../../src/api/userService/userService";


type UserServiceFixtures = {
  userService: UserService;
};

export const test = base.extend<UserServiceFixtures>({
  userService: async ({ }, use) => {
    const client = new APIClient();


    const token = "FAKE-TOKEN-123";
    await client.init(token);

    const userService = new UserService(client.getRequestContext());

    await use(userService);

    await client.dispose();
  },
});

export { expect } from "@playwright/test";

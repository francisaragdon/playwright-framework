import { test, expect } from "@playwright/test";
import { UserService } from "../../src/api/userService/userService";
import { APIClient } from "../../src/api/userService/apiClient";
import users from '../../src/data/api/users.json';

let client: APIClient;
let userService: UserService;

test.beforeAll(async () => {
    client = new APIClient();

    // auth service to get token
    const token = "FAKE-TOKEN-123";

    // call init with hard coded token for demo
    await client.init(token);

    userService = new UserService(client.getRequestContext());
});


test.afterAll(async () => {
    await client.dispose();
});

test('[@smoke] Create a new user', async () => {

    const payload = {
        name: "John Doe",
        email: "test@gmail.com"
    };
    const response = await userService.postUser(payload);
    expect(response.status()).toBe(201);

});


test.describe('Create user with valid payload', () => {
    for (const user of users.validUsers) {
        test(`Create user with name: ${user.name} and email: ${user.email}`, async () => {
            const response = await userService.postUser(user);
            expect(response.status()).toBe(201);
        });
    }
});

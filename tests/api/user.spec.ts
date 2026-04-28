import { test, expect } from "@playwright/test";
import { UserService } from "../../src/api/userService/service";
import { APIClient } from "../../src/api/userService/client";
import users from '../../src/data/api/users.json';

let client: APIClient;
let userService: UserService;

test.beforeAll(async () => {
    client = new APIClient();
    // await client.init();

    // auth service to get token
    const token = "FAKE-TOKEN-123";

    // call init with hard coded token for demo
    await client.init(token);
    console.log("SUCCESS");
    // initialize user service with the authenticated request context
    userService = new UserService(client.getRequestContext());
});


test.afterAll(async () => {
    await client.dispose();
});

// test('[@smoke] Create a new user', async ({ request }) => {
//     const userService = new UserService(request);
//     const payload = {
//         name: "John Doe",
//         job: "Software Engineer"
//     };
//     const response = await userService.postUser(payload);
//     expect(response.status()).toBe(201);
//     const responseBody = await response.json();
//     expect(responseBody.name).toBe("John Doe");
//     expect(responseBody.job).toBe("Software Engineer");
// });


test.describe('Create user with valid payload', () => {
    for (const user of users.validUsers) {
        test(`Create user with name: ${user.name} and email: ${user.email}`, async () => {
            const response = await userService.postUser(user);
            expect(response.status()).toBe(201);
        });
    }
});
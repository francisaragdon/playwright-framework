import { test, expect } from "../../fixtures/api/userServiceFixture";
import users from '../../data/api/users.json';

test(' [@smoke] Create a new user', async ({ userService }) => {

    const payload = {
        name: "John Doe",
        email: "test@gmail.com"
    };
    const response = await userService.postUser(payload);
    expect(response.status()).toBe(201);

});

test.describe('Create user with valid payload', () => {
    for (const user of users.validUsers) {
        test(`Create user with name: ${user.name}`, async ({ userService }) => {
            const response = await userService.postUser(user);
            expect(response.status()).toBe(201);
        });
    }
});

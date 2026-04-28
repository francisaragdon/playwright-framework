import { APIRequestContext } from "@playwright/test";

export class UserService {
    constructor(private request: APIRequestContext) { }

    async postUser(payload: any) {
        return await this.request.post('/api/users', {
            data: payload
        });
    }

}

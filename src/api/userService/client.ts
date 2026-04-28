import { request, APIRequestContext } from "@playwright/test";
import { config } from '../../../src/config/env';

export class APIClient {
    private context!: APIRequestContext;

    async init(token?: string) {
        console.log("BASE_URL:", config.apiBaseUrl);
        this.context = await request.newContext({
            baseURL: config.apiBaseUrl,

            extraHTTPHeaders: {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `${token}` } : {})
            }
        });
    }

    getRequestContext() {
        return this.context;
    }

    async dispose() {
        await this.context.dispose();
    }
}
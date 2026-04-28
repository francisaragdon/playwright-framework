import dotenv from 'dotenv';

const env = process.env.ENV || 'qa';

dotenv.config({
    path: `.env.${env}`,
});

export const config = {
    baseUrl: process.env.BASE_URL!,
    username: process.env.STANDARD_USERNAME!,
    password: process.env.STANDARD_PASSWORD!,
    pageTitle: process.env.PAGE_TITLE!,
    apiBaseUrl: process.env.API_BASE_URL!,

}

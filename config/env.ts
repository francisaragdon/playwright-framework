import dotenv from 'dotenv';

dotenv.config();

export const config = {
    baseUrl: process.env.BASE_URL!,
    username: process.env.STANDARD_USERNAME!,
    password: process.env.STANDARD_PASSWORD!,
    pageTitle: process.env.PAGE_TITLE!,

}
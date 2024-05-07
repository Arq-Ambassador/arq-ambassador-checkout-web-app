import dotenv from 'dotenv';
dotenv.config();

const { CORE_SERVICE_API_URL, STRIPE_PK } = process.env;

export default {
    ambassadorCoreServiceUrl: CORE_SERVICE_API_URL,
    stripeKey: STRIPE_PK
};

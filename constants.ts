const { ENDPOINT_API, STRIPE_KEY } = process.env;

export default {
    endpoint: `http://${ENDPOINT_API}`,
    stripe_key: STRIPE_KEY
};

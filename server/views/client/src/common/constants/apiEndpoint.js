const API_ENDPOINT = {
  AUTH: { SIGN_IN: '/auth/sign-in', SIGN_UP: '/auth/sign-up' },
  PRODUCT: {
    GET_PRODUCTS: '/product/get-products',
    GET_PRODUCT_CATEGORIES: '/product/get-product-categories',
    GET_PRODUCT_BRANDS: '/product/get-product-brands',
    GET_PRODUCT_DETAIL: '/product/get-product-detail',
  },
  CHECKOUT: {
    CREATE_CHECKOUT_SECTION: '/stripe/create-checkout-session',
  },
  ORDER: {
    GET_ACTIVITY: '/order/get-order-activity',
  },
};
const METHOD = {
  POST: 'POST',
  GET: 'GET',
};
export { API_ENDPOINT, METHOD };

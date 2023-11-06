const ROUTES = {
  HOME: { RELATIVE_PATH: '', ABSOLUTE_PATH: '/' },
  AUTH: { RELATIVE_PATH: 'auth', ABSOLUTE_PATH: '/auth' },
  SIGN_IN: { RELATIVE_PATH: 'sign-in', ABSOLUTE_PATH: '/auth/sign-in' },
  SIGN_UP: { RELATIVE_PATH: 'sign-up', ABSOLUTE_PATH: '/auth/sign-up' },
  PRODUCT_DETAIL: {
    RELATIVE_PATH: 'product-detail',
    ABSOLUTE_PATH: '/product-detail/:productId',
  },
  SHOPPING_CARD: {
    RELATIVE_PATH: 'shopping-card',
    ABSOLUTE_PATH: '/shopping-card',
  },
  CHECKOUT: {
    RELATIVE_PATH: 'checkout',
    ABSOLUTE_PATH: '/checkout',
  },
  CHECKOUT_SUCCESS: {
    RELATIVE_PATH: 'checkout-success',
    ABSOLUTE_PATH: '/checkout-success',
  },
  TRACK_ORDER: {
    RELATIVE_PATH: 'track-order',
    ABSOLUTE_PATH: '/track-order',
  },
  TRACK_ORDER_DETAIL: {
    RELATIVE_PATH: 'track-order-detail',
    ABSOLUTE_PATH: '/track-order-detail',
  },
};
export default ROUTES;

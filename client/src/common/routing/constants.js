const ROUTES = {
  HOME: { RELATIVE_PATH: '', ABSOLUTE_PATH: '/' },
  AUTH: { RELATIVE_PATH: 'auth', ABSOLUTE_PATH: '/auth' },
  SIGN_IN: { RELATIVE_PATH: 'sign-in', ABSOLUTE_PATH: '/auth/sign-in' },
  SIGN_UP: { RELATIVE_PATH: 'sign-up', ABSOLUTE_PATH: '/auth/sign-up' },
  PRODUCT_DETAIL: {
    RELATIVE_PATH: 'product-detail',
    ABSOLUTE_PATH: '/product-detail/:productId',
  },
};
export default ROUTES;

// import { useSelector } from 'react-redux';
// import { createSelector } from '@reduxjs/toolkit';
import api from '@app/api';
import { API_ENDPOINT, METHOD } from '@common/constants/apiEndpoint';

const apiWithCheckoutTags = api.enhanceEndpoints({ addTagTypes: ['Checkout'] });

const checkoutApi = apiWithCheckoutTags.injectEndpoints({
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: (body) => {
        return {
          url: API_ENDPOINT.CHECKOUT.CREATE_CHECKOUT_SECTION,
          method: METHOD.POST,
          body,
        };
      },
    }),
  }),
});

export const { useCheckoutMutation } = checkoutApi;
export default checkoutApi;

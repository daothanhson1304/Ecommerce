// import { useSelector } from 'react-redux';
// import { createSelector } from '@reduxjs/toolkit';
import api from '@app/api';
import { API_ENDPOINT, METHOD } from '@common/constants/apiEndpoint';

const apiWithProductTags = api.enhanceEndpoints({ addTagTypes: ['Product'] });

const productApi = apiWithProductTags.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (params) => {
        return {
          url: API_ENDPOINT.PRODUCT.GET_PRODUCT,
          method: METHOD.GET,
          params,
        };
      },
    }),
  }),
});

export const { useGetProductQuery } = productApi;
export default productApi;

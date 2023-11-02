// import { useSelector } from 'react-redux';
// import { createSelector } from '@reduxjs/toolkit';
import api from '@app/api';
import { API_ENDPOINT, METHOD } from '@common/constants/apiEndpoint';

const apiWithProductTags = api.enhanceEndpoints({ addTagTypes: ['Product'] });

const productApi = apiWithProductTags.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => {
        return {
          url: API_ENDPOINT.PRODUCT.GET_PRODUCTS,
          method: METHOD.GET,
          params,
        };
      },
    }),
    getProductCategories: builder.query({
      query: (params) => {
        return {
          url: API_ENDPOINT.PRODUCT.GET_PRODUCT_CATEGORIES,
          method: METHOD.GET,
          params,
        };
      },
    }),
    getProductBrands: builder.query({
      query: (params) => {
        return {
          url: API_ENDPOINT.PRODUCT.GET_PRODUCT_BRANDS,
          method: METHOD.GET,
          params,
        };
      },
    }),

    getProductDetail: builder.query({
      query: (params) => {
        return {
          url: API_ENDPOINT.PRODUCT.GET_PRODUCT_DETAIL,
          method: METHOD.GET,
          params,
        };
      },
    }),
  }),
});

export const {
  useGetProductCategoriesQuery,
  useGetProductBrandsQuery,
  useGetProductsQuery,
  useGetProductDetailQuery,
} = productApi;
export default productApi;

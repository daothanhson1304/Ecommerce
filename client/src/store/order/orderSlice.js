import api from '@app/api';
import { API_ENDPOINT, METHOD } from '@common/constants/apiEndpoint';

const apiWithOrderTags = api.enhanceEndpoints({ addTagTypes: ['Order'] });

const orderApi = apiWithOrderTags.injectEndpoints({
  endpoints: (builder) => ({
    getOrderActivity: builder.mutation({
      query: (body) => {
        return {
          url: API_ENDPOINT.ORDER.GET_ACTIVITY,
          method: METHOD.POST,
          body,
        };
      },
    }),
  }),
});

export const { useGetOrderActivityMutation } = orderApi;
export default orderApi;

import api from '@app/api';
import { API_ENDPOINT, METHOD } from '@common/constants/apiEndpoint';

const apiWithAuthTags = api.enhanceEndpoints({ addTagTypes: ['Auth'] });

const authApi = apiWithAuthTags.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINT.AUTH.SIGN_UP,
        method: METHOD.POST,
        body,
      }),
    }),
    signIn: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINT.AUTH.SIGN_IN,
        method: METHOD.POST,
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
export default authApi;

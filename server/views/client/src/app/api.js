import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Mutex } from 'async-mutex';

// const mutex = new Mutex();

// const resetAuth = () => {
//   localStorage.removeItem('accessToken');
//   localStorage.removeItem('refreshToken');
//   localStorage.removeItem('userId');
// };

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8888/api/v1',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithReAuth = async (args, api, extraOptions) => {
//   await mutex.waitForUnlock();
//   let result = await baseQuery(args, api, extraOptions);
//   if (result.error && result.error.status === 401) {
//     if (!mutex.isLocked()) {
//       const release = await mutex.acquire();
//       try {
//         const rememberMe = localStorage.getItem('rememberMe');
//         const refreshToken = localStorage.getItem('refreshToken');

//         if (refreshToken) {
//           // try to get a new token
//           const refreshResult = await baseQuery(
//             {
//               url: 'auth/refresh-tokens',
//               method: 'POST',
//               body: { refreshToken },
//             },
//             api,
//             extraOptions
//           );
//           if (refreshResult.data && rememberMe === 'true') {
//             const userWithTokens = refreshResult.data;
//             localStorage.setItem(
//               'accessToken',
//               userWithTokens.tokens.access.token
//             );
//             localStorage.setItem(
//               'refreshToken',
//               userWithTokens.tokens.refresh.token
//             );
//             localStorage.setItem('userId', userWithTokens.user.id);
//           } else {
//             resetAuth();
//           }
//         }
//       } finally {
//         release();
//       }
//     }
//     // retry the initial query
//     result = await baseQuery(args, api, extraOptions);
//   }
//   return result;
// };

const api = createApi({
  reducerPath: 'rootApi',
  // baseQuery: baseQueryWithReAuth,
  baseQuery,
  endpoints: () => ({}),
});

export default api;

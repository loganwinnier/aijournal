import { apiSlice } from './apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { ...userInfo },
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => {
        const formData = new FormData();
        formData.append('username', userInfo.username!);
        formData.append('password', userInfo.password!);
        return {
          url: '/auth/token',
          method: 'POST',
          body: formData,
        };
      },
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: `/users/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useGetCurrentUserQuery } =
  authApi;

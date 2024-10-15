import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    forgetPass: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "PATCH",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/otp/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    resendOtp: builder.mutation({
      query: (data) => ({
        url: "/otp/resend-otp",
        method: "POST",
        body: data,
      }),
    }),
    reSetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
        query: (data)=>({
            url: "/auth/change-password",
            method: "PATCH",
            body: data,
        })
    })
  }),
});

export const {
  useLoginMutation,
  useForgetPassMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useReSetPasswordMutation,
  useChangePasswordMutation
} = authApi;

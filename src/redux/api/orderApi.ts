import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      providesTags: [tagTypes?.order],
    }),
    createOrder: build.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes?.order],
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;

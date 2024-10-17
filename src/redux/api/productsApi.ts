import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => ({
        url: "/products",
        method: "GET",
        params: data,
      }),
      providesTags: [tagTypes?.products],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

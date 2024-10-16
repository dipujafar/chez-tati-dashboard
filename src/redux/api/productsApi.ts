import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: [tagTypes?.products],
    }),

    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: [tagTypes?.category],
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productsApi;

import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: [tagTypes?.category],
    }),
  }),
});

const { useGetCategoriesQuery } = categoriesApi;

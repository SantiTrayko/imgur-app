import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, GalleryData, GalleryFullFilters } from "../../types";
import { constants } from "../../config";

export const imgurApi = createApi({
  reducerPath: "imgurApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.imgur.com/3",
    headers: {
      Authorization: `Client-ID ${constants.imgur.client_id}`,
    },
  }),
  endpoints: (builder) => ({
    getGallery: builder.query<GalleryData[], {}>({
      query: ({ sort, section, window, page }: GalleryFullFilters) => `/gallery/${section}/${sort}/${page}/${window}`,
      keepUnusedDataFor: 120,
      transformResponse: (resp: ApiResponse<GalleryData>) => resp.data,
    }),
  }),
});

export const { useGetGalleryQuery } = imgurApi;

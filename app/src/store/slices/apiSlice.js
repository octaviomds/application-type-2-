import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../config';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // Здесь должен быть основной URL,
    // который будет использоваться для всех запросов
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'unimor/api.json',
    }),
  }),
});

export const {useGetAllProductsQuery} = apiSlice;

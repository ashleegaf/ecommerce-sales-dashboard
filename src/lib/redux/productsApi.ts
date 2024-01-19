import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '@/types/products';

export const productsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<{ data: IProduct }, string>({
            query: (id) => `products/${id}`,
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;

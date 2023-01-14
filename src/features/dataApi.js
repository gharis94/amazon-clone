import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const amazonApi = createApi({
    reducerPath:'amazonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com/',
        
    }),
    endpoints:(builder)=>({
        getProducts: builder.query({
            query: () => 'products'
        }),
        getCategory: builder.query({
            query: () => 'products/categories'
        }),
        getCategoryByName: builder.query({
            query: (e) => `products/category/${e}`
        })
    })
})

export const {useGetProductsQuery,useGetCategoryQuery,useGetCategoryByNameQuery} =amazonApi;
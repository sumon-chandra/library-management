import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetBooksResponse } from "../../../types";
export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
    endpoints: (builder) => ({
        getBooks: builder.query<GetBooksResponse, void>({
            query: () => "books",
        }),
    })
})

export const { useGetBooksQuery } = booksApi
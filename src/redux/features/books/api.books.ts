import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetBookByIdResponse, GetBooksResponse } from "../../../types";
export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
    endpoints: (builder) => ({
        getBooks: builder.query<GetBooksResponse, void>({
            query: () => "books",
        }),
        // Get a single book by ID
        getBookById: builder.query<GetBookByIdResponse, string>({
            query: (bookId) => `books/${bookId}`,
        }),
        // Mutation to edit a book
        editBook: builder.mutation({
            query: (book) => ({
                url: `books/${book._id}`,
                method: "PUT",
                body: book,
            }),
        })
    })
})

export const { useGetBooksQuery, useEditBookMutation, useGetBookByIdQuery } = booksApi
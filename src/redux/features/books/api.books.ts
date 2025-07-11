import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetBookByIdResponse, GetBooksResponse } from "../../../types";
export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://a3-libraryapi.vercel.app/api/" }),
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
        }),
        // Mutation to add a new book
        addBook: builder.mutation({
            query: (book) => ({
                url: "books",
                method: "POST",
                body: book,
            }),
        }),
    })
})

export const { useGetBooksQuery, useEditBookMutation, useGetBookByIdQuery, useAddBookMutation } = booksApi
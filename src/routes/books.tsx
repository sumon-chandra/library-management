import { createFileRoute } from "@tanstack/react-router";
import { useGetBooksQuery } from "../redux/features/books/api.books";
import BooksTable from "../components/books/books-table";
import BooksTableSkeleton from "../components/books/books-table-skeleton";

export const Route = createFileRoute("/books")({
  component: Books,
});

function Books() {
  const { isLoading, isError, isSuccess, data } = useGetBooksQuery();
  return (
    <>
      {isLoading && <BooksTableSkeleton />}
      {isError && <p>Error loading books</p>}
      {isSuccess && (
        <div>
          <h1 className="mb-4 text-2xl font-bold">Books</h1>
          <p className="mb-4 text-gray-600">List of all books in the library</p>
          <BooksTable books={data.data} />
        </div>
      )}
    </>
  );
}

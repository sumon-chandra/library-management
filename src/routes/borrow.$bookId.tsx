import { createFileRoute } from "@tanstack/react-router";
import { useGetBookByIdQuery } from "../redux/features/books/api.books";
import { Loader } from "lucide-react";
import NotFound from "../components/not-found";
import BorrowForm from "../components/borrow/borrow-form";

export const Route = createFileRoute("/borrow/$bookId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { bookId } = Route.useParams();
  const { data, isLoading } = useGetBookByIdQuery(bookId);

  const book = data?.data;

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="animate-spin" />
      </div>
    );

  if (!book) {
    return <NotFound url="/books" btnLabel="Go to Book List" />;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 text-gray-800">
        Borrow <span className="font-bold">&quot;{book.title}&quot;</span>
      </h2>
      <div className="mb-6">
        <p className="text-gray-700">
          <span className="font-bold">Author:</span> {book.author}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Genre:</span> {book.genre}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Available Copies:</span> {book.copies}
        </p>
      </div>
      <BorrowForm availableCopies={book.copies} bookId={book?._id} />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/edit-book/$bookId")({
  component: EditBook,
});

function EditBook() {
  const { bookId } = Route.useParams();

  return (
    <div>
      <h1>Edit Book {bookId}</h1>
    </div>
  );
}

export default EditBook;

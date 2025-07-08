import { toast } from "sonner";
import { useEditBookMutation } from "../../redux/features/books/api.books";
import type { Book } from "../../types";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

interface BookFormProps {
  editMode?: boolean;
  book?: Book;
}

type BookDataType = Omit<
  Book,
  "genre" | "copies" | "available" | "createdAt" | "updatedAt"
>;

const BookForm = ({ editMode, book }: BookFormProps) => {
  const [
    updateBook,
    { isSuccess: isUpdateSuccess, isLoading: isUpdating, isError: isUpdateError },
  ] = useEditBookMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bookData: BookDataType = {
      _id: editMode && book ? book._id : "",
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      isbn: formData.get("isbn") as string,
      description: formData.get("description") as string,
    };
    try {
      // If in edit mode, we update the book, otherwise we can handle adding a new book here
      const updateResult = await updateBook(bookData);
      if (isUpdateSuccess) {
        toast.success("Book updated successfully!");
      }
      if (isUpdateError) {
        toast.error("Failed to update book. Please try again.");
      }

      // Additional logic can be added here if needed, such as redirecting the user or clearing the form
    } catch (error) {
      console.error("Error submitting book data:", error);
      toast.error("Something went wrong. Please try again.");
      return;
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">
        {editMode ? "Edit the details of the book below:" : "Add New Book"}
      </h2>
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          {...(editMode && book ? { defaultValue: book.title } : {})}
          className="p-2 border rounded"
          placeholder="Enter book title"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="author" className="mb-2">
          Author
        </label>
        <input
          type="text"
          name="author"
          id="author"
          {...(editMode && book ? { defaultValue: book.author } : {})}
          className="p-2 border rounded"
          placeholder="Enter author name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="isbn" className="mb-2">
          ISBN
        </label>
        <input
          type="text"
          name="isbn"
          id="isbn"
          {...(editMode && book ? { defaultValue: book.isbn } : {})}
          className="p-2 border rounded"
          placeholder="Enter ISBN number"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          {...(editMode && book ? { defaultValue: book.description } : {})}
          className="p-2 border rounded"
          placeholder="Enter book description"
        />
      </div>
      <Button
        disabled={isUpdating}
        type="submit"
        className="inline cursor-pointer ms-auto px-10 mt-5"
      >
        {editMode ? (
          <>
            {isUpdating ? (
              <span className="flex items-center">
                <Loader className="mr-2 animate-spin" />
                <span>Updating...</span>
              </span>
            ) : (
              "Update Book"
            )}
          </>
        ) : (
          "Add Book"
        )}
      </Button>
    </form>
  );
};

export default BookForm;

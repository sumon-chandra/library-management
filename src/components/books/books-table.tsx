import type { Book } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit, ShoppingBag, Trash2Icon } from "lucide-react";
import ActionButton from "./action-button";
import { useNavigate } from "@tanstack/react-router";

const BooksTable = ({ books }: { books: Book[] }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Available</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book, idx) => (
              <TableRow key={`${book.isbn}_${book._id}`}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>
                  {book.description.length > 50
                    ? `${book.description.slice(0, 50)} ...`
                    : book.description}
                </TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>{book.available ? "Yes" : "No"}</TableCell>
                <TableCell className="flex items-end gap-2">
                  <ActionButton icon={<ShoppingBag />} actionLabel="Borrow Book" />
                  <ActionButton
                    icon={<Edit />}
                    actionLabel="Edit Book"
                    onClick={() => {
                      navigate({
                        to: `/edit-book/${book._id}`,
                        params: { bookId: book._id },
                      });
                    }}
                  />
                  <ActionButton
                    icon={<Trash2Icon />}
                    actionLabel="Delete Book"
                    isDeleteButton
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BooksTable;

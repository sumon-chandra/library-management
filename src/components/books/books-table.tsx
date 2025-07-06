import type { Book } from "../../types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit, Trash2Icon } from "lucide-react";

const BooksTable = ({ books }: { books: Book[] }) => {
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
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book, idx) => (
              <TableRow key={book.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.description}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>{book.available ? "Yes" : "No"}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Edit className="w-4 hover:text-green-700 cursor-pointer" />
                  <Trash2Icon className="w-4 hover:text-red-700 cursor-pointer" />
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

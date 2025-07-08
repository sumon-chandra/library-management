export interface Book {
    _id: string;
    title: string;
    author: string;
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY';
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface GetBooksResponse {
    success: boolean;
    message: string;
    data: Book[];
}

export interface GetBookByIdResponse {
    success: boolean;
    message: string;
    data: Book;
}

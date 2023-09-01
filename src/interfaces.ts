import { Category } from './enums';
import { Logger } from './types';

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface Book {
    id: number;
    title: string;
    category: Category;
    author: string;
    available: boolean;
    pages?: number;
    markDamaged?: Logger;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

interface A {
    name: string;
}

// interface AA extends A, Librarian {}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

export { TOptions, Book, Librarian, Author, Person, A, Magazine, ShelfItem };

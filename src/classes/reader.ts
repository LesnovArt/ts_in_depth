import * as i from '../interfaces';

export class Reader {
    name!: string;
    books: i.Book[] = [];

    take(book: i.Book): void {
        this.books.push(book);
    }
}

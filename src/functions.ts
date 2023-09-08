/* eslint-disable no-redeclare */
import { Book, Author, TOptions, Callback, LibMgrCallback } from './interfaces';
import { Category } from './enums';
import { PersonBook, BookProperties } from './types';
import RefBook from './classes/encyclopedia';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.Javascript,
            author: 'Evan Burchard',
            available: false,
        },

        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.HTML,
            author: 'Liang Yuxian Eugene',
            available: false,
        },

        { id: 3, title: 'CSS Secrets', category: Category.HTML, author: 'Lea Verou', available: true },

        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.Javascript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()) {
    const firstAvailableBookTitle = books.find(book => Boolean(book.available))?.title;

    console.log('Books:', books);
    console.log('First available:', firstAvailableBookTitle);
}

export function getBookTitlesByCategory(category: Category = Category.Javascript): string[] {
    const books = getAllBooks();

    return books.filter(book => book.category === category).map(({ title }) => title);
}

export function logBookTitles(titles: string[]): void {
    titles.map((title, index) => console.log(`title ${index}:`, title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index] ?? ({} as Book);

    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },

        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },

        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return data.reduce((acc, object) => {
        return acc + BigInt(object.books * object.avgPagesPerBook);
    }, 0n);
}

export const createCustomerId = (name: string, id: number) => `${id}/${name}`;
export const idGenerator: typeof createCustomerId = (name: string, id: number) => `${id}/${name}`;
export const createCustomer = (name: string, age?: number, city?: string): void => {
    console.log('Customer name:', name);
    age && console.log('Customer age:', name);
    city && console.log('Customer city:', name);
};
export const getBookById = (id: Book['id']): Book | undefined => getAllBooks().find(book => book.id === id);
export const checkoutBooks = (customer: string, ...bookIds: number[]): string[] => {
    console.log('Customer name1:', customer);

    return bookIds
        .map(id => getBookById(id))
        .filter(book => book?.available && book?.title)
        .map(book => book!.title);
};

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [boolean | string] | [number, boolean]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(({ author }) => author === arg).map(({ title }) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({ available }) => available === arg).map(({ title }) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'string' && typeof available === 'boolean') {
            return books.filter(book => id === book.id && available === book.available).map(({ title }) => title);
        }
    }
    return [];
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should be a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export const bookTitleTransform = (title: any) => {
    assertStringValue(title);

    return [...title].reverse().join();
};

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);

    data.printItem();
}

export const printBook = (book: Book): void => {
    console.log(`"${book.title}" by ${book.author}`);
};

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    markDamaged: (reason: string): void => {
        console.log(`Damaged ${reason}`);
    },
    // year: 2015,
    // copies: 3,
};

const favoriteAuthor: Author = {
    name: 'John',
    email: 'john@email.com',
    numBooksPublished: 3,
};

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

export const getProperty = (book: Book & { isbn: string }, property: BookProperties): any => {
    if (typeof book[property] === 'function') {
        return (book[property] as Function).name;
    } else {
        return book[property];
    }
};

export const setDefaultConfig = (options: TOptions): TOptions => {
    options.duration ??= 100;
    options.speed ??= 45;

    return options;
};

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getObjectProperty<TObj extends object, TKey extends keyof TObj>(
    obj: TObj,
    property: TKey,
): TObj[TKey] | string {
    if (typeof obj[property] === 'function') {
        return (obj[property] as Function).name;
    } else {
        return obj[property];
    }
}

export type UpdateResult<T> = T extends true ? string : number;

export function update<T extends boolean>(flag: T): UpdateResult<T> {
    if (flag) {
        return 'some string' as UpdateResult<T>;
    } else {
        return 10 as unknown as UpdateResult<T>;
    }
}

const r1 = update(true);
const r2 = update(false);

export function getBooksByCategory(category: Category, callback: Callback<string[]>) {
// export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
  setTimeout(() => {
    try {
      const titles = getBookTitlesByCategory(category)

      if(titles.length > 0) {
        callback(null, titles)
      } else {
        throw new Error('No books found')
      }
    } catch (error: any) {
      callback(error, null)
    }
  }, 2000)
}

export function logCategorySearch(error: Error | null, data: string[] | null): void {
  if(error) {
    console.log(error.message);
  } else {
    console.log(data);
    
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

        const titles = getBookTitlesByCategory(category)
  
        if(titles.length > 0) {
          resolve(titles)
        } else {
          reject('No books found')
        }
    }, 2000)
  })
}

export async function logSearchResult(category: Category) {
  const r: Awaited<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category)
  console.log(r.length);
}

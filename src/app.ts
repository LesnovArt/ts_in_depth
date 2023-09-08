import * as i from './interfaces';
import * as t from './types';
import * as e from './enums';
import { setDefaultConfig, printRefBook, purge, getObjectProperty, getAllBooks, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResult } from './functions';

import { UL, RefBook, Shelf } from './classes';
import { Library } from './classes/library';

// import type { Library } from './classes/library';

// showHello('greeting', 'TypeScript');
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.Javascript));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());

// console.log(bookTitleTransform('learn Typescript'));
// console.log(bookTitleTransform(9));
// getTitles('Evan Burchard');
// getTitles(true);
// getTitles(2, true);
// const myId = createCustomerId('Ann', 10);
// const myId2 = idGenerator('Ben', 15);
// createCustomer('John');
// createCustomer('John', 31);
// createCustomer('John', 31, 'LA');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookById(1));
// checkoutBooks('Ann', 1);
// console.log(myId, myId2);

// const favoriteLibrarian: Librarian = {
//     name: 'Denny',
//     email: 'denny@email.com',
//     department: 'library management',
//     assistCustomer: (custName, bookTitle) => {
//         console.log(`${custName} bought ${bookTitle}`);
//     },
// };

// console.log(getProperty({ ...myBook, ...{ isbn: '2378hsd' } }, 'title'));
// console.log(getProperty({ ...myBook, ...{ isbn: 'jsdc232d' } }, 'markDamaged'));
// console.log(getProperty({ ...myBook, ...{ isbn: 'dhb7821' } }, 'isbn'));

// printBook(myBook);
// myBook.markDamaged?.('missing back cover');

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);
// console.log(offer?.book?.authors?.[0]?.name);

// Task 05.01
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2011);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref.publisher);
// console.log(ref);
// console.log(ref.getId());

// Task 05.02, 05.03
// const refBook = new Encyclopedia(1, 'Learn TypeScript', 2023, 2);
// const refBook = new RefBook(1, 'Learn TypeScript', 2023, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: i.A & i.Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Boris';
// favoriteLibrarian.assistCustomer('John', 'Learn TypeScript');
// console.log(favoriteLibrarian);

// Task 05.05
// const personBook: PersonBook = {
//   name: 'Andrew',
//   email: 'ax@mail.com',
//   id: 21,
//   title: 'Matching',
//   category: Category.NODE,
//   author: 'Archibalt',
//   available: true,
//   pages: 3,
// };
// console.log(personBook)

// let options: TOptions = {};
// options = setDefaultConfig(options);
// console.log(options);

// Task 06.03

// printRefBook(new RefBook(1, 'Learn TypeScript', 2023, 2));
// printRefBook(new UL.UniversityLibrarian());

// Task 06.04, 06.05

// const flag = true;
// const flag2 = true;

// if (flag) {
//     import('./classes').then(module => {
//         const reader = new module.Reader();

//         reader.name = 'Boris';
//         console.log(reader);
//     });
// }

// if (flag2) {
//     const module = await import('./classes').then(module => module);
//     const reader = new module.Reader();

//     reader.name = 'Boris';
//     console.log(reader);
// }

// task 06.06

// const library: Library = {
//     id: '1',
//     name: 'Eddy',
//     adress: 'MainStreet 85/4',
// };
// console.log(library);

// task 07.01

// const inventory = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: e.Category.Software },

//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: e.Category.Software },

//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: e.Category.Software },

//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: e.Category.Software },
// ];

// const r = purge(inventory);
// const n = purge([1, 2, 4, 56, 812, 21, 0]);
// console.log(r);
// console.log(n);
// const purgeNumbers = purge<number>;
// console.log(purgeNumbers([1, 6, 2]));
// console.log(purgeNumbers(['d', 'r']));

// task 07.02

// const bookShelf = new Shelf<i.Book>();

// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: i.Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },

//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },

//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<i.Magazine>();

// magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst().title);

// task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Point'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(magazines[0], 'publisher'));
// console.log(getObjectProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getObjectProperty(getAllBooks()[0], 'title'));

// task 07.04

// const bookRequiredFields: t.BookRequiredFields = {
//     id: 1,
//     title: 'Learn TypeScript',
//     author: 'Anna',
//     available: false,
//     category: e.Category.HTML,
//     pages: 4,
//     markDamaged: () => {},
// };

// const params: Parameters<t.CreateCustomerFunctionalType> = ['Ann', 30, 'Kyiv'];
// createCustomer(...params);

// task 08.01

// const uniLibrarian = new UL.UniversityLibrarian();
// uniLibrarian.assistCustomer = () => {};

// task 08.02

// const libr2 = new UL.UniversityLibrarian();

// libr2.name = 'Anna';
// console.log(libr2);
// (libr2 as any).printLibrarian();

// task 08.03

// const libr3 = new UL.UniversityLibrarian();

// libr3.name = 'Anna';
// console.log(libr3);
// Object.getPrototypeOf(libr3).assistFaculty = () => {};
// libr3.assistFaculty();
// Object.getPrototypeOf(libr3).assistCommunity = () => {};
// libr3.assistCommunity();

// task 08.04

// const enc = new RefBook(1, 'Learn TypeScript', 2023, 4);
// enc.printItem();

// task 08.05

// const l = new Library();
// console.log(l);

// task 08.06

// const uniLib = new UL.UniversityLibrarian();
// uniLib.name = 'Anna';
// console.log(uniLib);
// console.log(uniLib.name);
// uniLib.assistCustomer('Boris', 'TypeScript');

// task 08.07

// const enc = new RefBook(1, 'Learn TS', 2023, 3)
// enc.copies = 0,4
// enc.copies = 2,4

// task 09.01

// getBooksByCategory(e.Category.Javascript, logCategorySearch)

// task 09.02

console.log('Begin');
getBooksByCategoryPromise(e.Category.Javascript)
  .then((titles) => {
    console.log(titles);

    return Promise.resolve(titles.length)
  })
  .then((length) => console.log(length)
  )
  .catch((error) => console.log(error)
  )
getBooksByCategoryPromise(e.Category.Software)
  .then((titles) => console.log(titles)
  )
  .catch((error) => console.log(error)
  )
console.log('End');

// task 09.03

console.log('begin');
logSearchResult(e.Category.Javascript).catch((error) => {console.log(error);
})
console.log('end');

console.log('begin');
logSearchResult(e.Category.Software).catch((error) => {console.log(error);
})
console.log('end');

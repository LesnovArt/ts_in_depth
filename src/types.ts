import { Book, Person, Author } from './interfaces';
import { createCustomer, getBooksByCategoryPromise } from './functions';
export type Logger = (reason: string) => void;
export type BookProperties = keyof Book;
export type PersonBook = Book | Person;
export type BookOrUndefined = Book | undefined;
export type BookRequiredFields = Required<Book>;
export type UpdateBook = Partial<Book>;
export type AuthorNoEmail = Omit<Author, 'email'>;

export type CreateCustomerFunctionalType = typeof createCustomer;

export type Fn = (p1: string, p2: number, p3: boolean) => symbol;
export type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
export type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
export type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;
export type Param4<T> = T extends (p1: infer U, p2: infer S, p3: infer R) => symbol ? [R, S, U] : never;

type s = Param1<Fn>;
type n = Param2<Fn>;
type b = Param3<Fn>;
type t = Param4<Fn>;

export type RequiredProps<T extends object> = {
    [property in keyof T]: {} extends Pick<T, property> ? never : property;
}[keyof T];

export type OptionalProps<T extends object> = {
    [property in keyof T]: {} extends Pick<T, property> ? property : never;
}[keyof T];

type RequiredBookProps = NonNullable<RequiredProps<Book>>;
type OptionalBookProps = NonNullable<OptionalProps<Book>>;

export type RemoveProps<TObj extends object, TProp extends keyof TObj> = {
    [property in keyof TObj as Exclude<property, TProp>]: TObj[TProp];
};

type BookRequiredPropsType = RemoveProps<Book, OptionalBookProps>;
type BookOptionalPropsType = RemoveProps<Book, RequiredBookProps>;

type Unpromisify<T> = 
T extends Promise<infer U>
  ? U
  : never;

type fnPromise = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>

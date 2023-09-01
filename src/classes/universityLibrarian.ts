/* eslint-disable no-underscore-dangle */
import { format, freeze, logger, writable } from '../decorator';
import * as i from '../interfaces';

// @freeze('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements i.Librarian {
    @format()
    accessor name!: string;
    email!: string;
    department!: string;

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    @writable(true)
    assistFaculty(): void {
        console.log('Assist faculty');
    }

    @writable(false)
    assistCommunity(): void {
        console.log('Assist faculty');
    }
}

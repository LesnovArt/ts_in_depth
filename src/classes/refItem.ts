import { timeout } from '../decorator';

/* eslint-disable no-underscore-dangle */
export abstract class ReferenceItem {
    private _publisher: string = '';
    #id: number;
    static department: string = 'Classical dep';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, public year: number) {
        console.log('Creating a new Reference Item...');
        this.#id = id;
    }

    @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);
        // console.log(`Department: ${(this.constructor as any).department}`);
    }

    getId(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

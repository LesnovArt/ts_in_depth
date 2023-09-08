import { positiveInteger } from '../decorator';
import { ReferenceItem } from './refItem';

class Encyclopedia extends ReferenceItem {
    private _copies: number = 0;

    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    get copies() : number {
      return this._copies
    }

    @positiveInteger
    set copies(value: number) {
      this.copies = value
    }
    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title}-${this.year}`);
    }
}

export default Encyclopedia;

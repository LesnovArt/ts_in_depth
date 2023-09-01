import { setInitial } from '../decorator';

export class Library {
    @setInitial(1)
    id: number = 0;
    name!: string;
    adress!: string;
}

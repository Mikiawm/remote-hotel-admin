import { Rental } from './rental';

export class Customer {
    customerId: number;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    phoneNumber: string;
    createDate: Date;
    rentals: Rental[];
}

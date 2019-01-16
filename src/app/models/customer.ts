import { Reservation } from './reservation';

export class Customer {
    customerId?: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    createDate?: Date;
    rentals?: Reservation[];
}

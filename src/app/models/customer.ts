import { Reservation } from './reservation';

export class Customer {
    CustomerId?: number;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    CreateDate?: Date;
    Reservations?: Reservation[];
}

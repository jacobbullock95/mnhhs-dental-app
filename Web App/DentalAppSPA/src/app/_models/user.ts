import { Form } from './form';

export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    phone: string;
    medicareNumber?: string;
    medicareCode?: string;
    medicareExpiry?: string;
    emailVerify: string;
    forms?: Form[];
}

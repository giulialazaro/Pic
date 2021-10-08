import { StringifyOptions } from 'querystring';

export interface CreateGroup {
    name: string;
}

export interface ListGroup {
    code: string;
    id: number;
    name: string;
}
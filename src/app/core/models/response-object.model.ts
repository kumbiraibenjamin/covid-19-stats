export interface ResponseObject<T> {
    get: string;
    parameters: any;
    errors: any[];
    results: number;
    response: T[]
}
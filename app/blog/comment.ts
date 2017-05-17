export class Comment {
    id: string;
    dateCreated: Date;

    constructor(public email: string, public message: string, public name: string) {}
}
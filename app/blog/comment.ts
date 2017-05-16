export class Comment {
    id: string;
    dateCreated: Date;

    constructor(public email: string, public message: String, public name: string) {}
}
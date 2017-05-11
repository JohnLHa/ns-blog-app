export class Post {
    isStatic: boolean;
    isFeatured: boolean;
    dateCreated: string;
    datePublished: string;
    status: string;
    tags: string;

    constructor(public title: string, public body: String, public slug: string) {}
}
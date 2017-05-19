export class Post {

    constructor(public title: string, public body: string, public slug: string, public isStatic: boolean, public isFeatured: boolean, public dateCreated: Date, public datePublished: Date,
    public status: string, public tags: string, ) {}
}
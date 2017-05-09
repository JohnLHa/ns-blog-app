import { Component, OnInit } from "@angular/core";
import { Post } from "./post"

import { BlogService } from "./blog.service"

@Component({
    selector: "blog-posts",
    moduleId: module.id,
    templateUrl: "./posts.component.html",
    styleUrls: ["./post_comp.css"],
    providers: [BlogService]
})
export class PostsComponent implements OnInit {
    posts: Array<Post> = [];

    constructor(private data: BlogService) { }

    ngOnInit(): void {
        this.data.posts().subscribe(posts=>{
            posts.forEach(post=>this.posts.push(post))
        });
        /*Hoping to hard code some pictures in for now.
        
        this.posts[0].pic = "http://www.fillmurray.com/200/300";
        this.posts[1].pic = "http://www.fillmurray.com/300/400"; */   
    }


}

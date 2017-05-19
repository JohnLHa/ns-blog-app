import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Observable} from 'rxjs/Observable';

import { Page } from "ui/page";
import { Post } from "./post";
import { BlogService } from "./blog.service";
import { RouterExtensions} from "nativescript-angular/router";
import { Comment } from "./comment";
import { TextView } from "ui/text-view";
import { CommentComponent } from "./comment.component";
import { PageRoute } from "nativescript-angular/router";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.css"],
    providers: [BlogService, CommentComponent]
})

export class PostDetailComponent implements OnInit {
    post: Observable<Post>;
    posts: Array<Post> 
    comments: Array<Comment> = [];
    data: Observable<Array<Post>>;
    thePost: Post;
    title: string;
    body: string;
    slug: string;
    id: string;
    curDate= new Date();
    phrase= "";

    @Input() comment: Comment;

    constructor(
        private routerExtensions: RouterExtensions,
        private blogService: BlogService,
        private route: ActivatedRoute,
        page: Page,
        commentComponent: CommentComponent,
        private pageRoute: PageRoute

    )
    {//page.actionBarHidden = true;
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => { 
                this.slug = params["id"];
                this.post = params["id"]; //don't know why this is needed, but can't function without it
        });

    }

    ngOnInit(): void {
        this.getPostInfo();
        this.getComments();
    }

    //Pulls the current Post info using the slug.
    getPostInfo(){
        this.blogService.getPostBySlug(this.slug)
            .subscribe(x => { 
                JSON.stringify(x);
                this.post = x;
        });
    }

    //Pulls all Comments from the blog API and stores it into a comments array<Comment>
    getComments() {
        this.blogService.getComments(this.slug)
            .subscribe(comments=>{
            comments.forEach(comment=>this.comments.push(comment))
        });
    }
    
    //Adds a Comment object to the blog API from user input
    addComment() {
        //Checks to make sure a comment went through
        if (!this.phrase) { 
            console.log("Message was not found.");
            return; 
        }

        //Creates a new comment and posts using the user's information.
        //Currently hardcoded: email and name. Guid can stay since it's not used.
        //Needs to be finished.
            this.comment = new Comment("12345678-9100-poop-guid-amverymature", "abc@gmail.com", this.phrase, "John", new Date());
            this.blogService.postComment(this.comment, this.slug)
                .subscribe(comment => {this.comments.push(comment)
            });
            alert("Your comment was posted. Refresh the page to see the changes.");
    }

    deleteComment(item: Comment){
        console.log(item.id);

        //Checks to make sure a comment went through
        if (!item) { 
            console.log("Comment was not found.");
            return; 
        } 

        //Calls BlogService to delete the comment
        this.blogService.deleteComment(item.id)
            .subscribe(comments=>{
                comments.forEach(comment=>this.comments.push(comment))
            });
        alert("Your comment was deleted. Refresh the page to see the changes.");
    }

    //Back button to return to previous page.
    public goBack(){
        this.routerExtensions.back();
    }

    //Share button to share a blog through social media.
    //Needs to be finished.
    public share(){
        alert("You have pressed the share button.");
    }

    //Saves the blog post to the user's bookmarks.
    //Needs to be finished.
    public bookmark(){
        alert("You have pressed the bookmark button.");
    }
    
}
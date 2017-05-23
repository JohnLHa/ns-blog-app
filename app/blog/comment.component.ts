import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { PageRoute } from "nativescript-angular/router"; 
import { BlogService } from "./blog.service";
import { RouterExtensions} from "nativescript-angular/router";
import { Comment } from "./comment";
import { Post } from "./post"
import { PostDetailComponent } from "./post-detail.component";
import * as dialogs from "ui/dialogs"; //Used for the login dialog

@Component({
    selector: "comment-section",
    moduleId: module.id,
    templateUrl: "./comment.html",
    styleUrls: ["./comment.css"],
    providers: [BlogService, PostDetailComponent]
})

export class CommentComponent implements OnInit {
  comment: Comment;
  comments: Array<Comment> = [];
  slug: string;
  post: Post;
  phrase: string;
  isLoading = false;

    constructor (
        private blogService: BlogService,
        private pageRoute: PageRoute
    ) 
    {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => { 
                this.slug = params["id"];
                this.post = params["id"]; //don't know why this is needed, but can't function without it
        });
    }

    ngOnInit() { 
        this.isLoading = true;
        this.getPostInfo();
        this.getComments(); 
        
    }   

    //Pulls all Comments from the blog API and stores it into a comments array<Comment>
    getComments() {
        this.blogService.getComments(this.slug)
            .subscribe(comments=>{
            comments.forEach(comment=>this.comments.push(comment))
        });
        for(var i in this.comments){
            console.log(this.comments[i].name);
        }
        this.isLoading = false;
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
        //Needs to be finished after login section works.
            this.comment = new Comment("12345678-9100-poop-guid-amverymature", "abc@gmail.com", "John", this.phrase, new Date());
            this.blogService.postComment(this.comment, this.slug)
                .subscribe(comment => {this.comments.push(comment)
            });
            
            alert("Your comment was posted. Pull up to refresh.");
    }

    deleteComment(item: Comment){
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
        alert("Your comment was deleted. Pull up to refresh.");
    }

    //Gets post details. Needed for retaining modularity in adding and deleting comments
    getPostInfo(){
        this.blogService.getPostBySlug(this.slug)
            .subscribe(x => { 
                JSON.stringify(x);
                this.post = x;
        });
    }

    //Will be replaced with auth0 later.
    login(){
        dialogs.login({
            title: "Login",
            message: "Please login using your email and password",
            okButtonText: "Login",
            cancelButtonText: "Cancel",
            neutralButtonText: "Sign Up",
            userName: "",
            password: ""
        }).then(r=> {
            if(r.result){
                console.log("Result was true or Login button");
            }
            else if(r.result == undefined){
                console.log("Result was undefined or Register button");
            }
            else if (!r.result){
                console.log("Result was false or Cancel button");
            }

        });

    }
}
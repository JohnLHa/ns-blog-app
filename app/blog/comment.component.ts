import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Observable} from 'rxjs/Observable';

import { BlogService } from "./blog.service";
import { RouterExtensions} from "nativescript-angular/router";
import { Comment } from "./comment";
import { Post } from "./post"

@Component({
    selector: "comment-section",
    moduleId: module.id,
    templateUrl: "./post-detail.component.html",
    providers: [BlogService]
})

export class CommentComponent implements OnInit {
  errorMessage: string;
  comment: Comment;
  comments: Comment[];
  mode = 'Observable';
  slug: string;
  post: Post;
  phrase: string;

  constructor (private blogService: BlogService) {}

  ngOnInit() { this.getComments(); }

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
        //Needs to be finished after login section works.
            this.comment = new Comment("12345678-9100-poop-guid-amverymature", "abc@gmail.com", this.phrase, "John", new Date());
            this.blogService.postComment(this.comment, this.slug)
                .subscribe(comment => {this.comments.push(comment)
            });
            alert("Your comment was posted. Pull up to refresh.");
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
        alert("Your comment was deleted. Pull up to refresh.");
    }
}
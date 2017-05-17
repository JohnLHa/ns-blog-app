import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Observable} from 'rxjs/Observable';

import { BlogService } from "./blog.service";
import { RouterExtensions} from "nativescript-angular/router";
import { Comment } from "./comment";

@Component({
    selector: "comment-section",
    moduleId: module.id,
    templateUrl: "./post-detail.component.html",
    providers: [BlogService]
})

export class CommentComponent implements OnInit {
  errorMessage: string;
  comment: string;
  comments: Comment[];
  mode = 'Observable';
  slug: string;

  constructor (private blogService: BlogService) {}

  ngOnInit() { this.getComments(); }

  getComments() {
    /*this.blogService.getComments(this.slug)
        .subscribe(
            comments => this.comments = comments,
            error =>  this.errorMessage = <any>error);*/
                       
    this.blogService.getComments(this.slug).subscribe(comments=>{
        comments.forEach(comment=>this.comments.push(comment))
        });
  }
  addComment(phrase: Comment) {
    if (!phrase) { return; }
    this.blogService.postComment(phrase, this.slug)
                     .subscribe(
                       comment  => this.comments.push(comment),
                       error =>  this.errorMessage = <any>error);
  }

  testAdd(){
      console.log(" Message received.");
  }
}
import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { Page } from "ui/page";
import { Post } from "./post";
import { BlogService } from "./blog.service";
import { RouterExtensions} from "nativescript-angular/router";
import { Comment } from "./comment"; 
import { PageRoute } from "nativescript-angular/router"; 

@Component({
    selector: "post-details",
    moduleId: module.id,
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.css"],
    providers: [BlogService]
})

export class PostDetailComponent implements OnInit {
    post: Observable<Post>;
    thePost: Post;
    slug: string;
    curDate = this.getDate();


    constructor(
        private routerExtensions: RouterExtensions,
        private blogService: BlogService,
        private route: ActivatedRoute,
        private page: Page,
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
    }

    // Pulls the current Post info using the slug.
    getPostInfo(){
        this.blogService.getPostBySlug(this.slug)
            .subscribe(x => { 
                JSON.stringify(x);
                this.post = x;
        });
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

    public getDate(){
        var d = new Date();
        var months = new Array("January", "February", "March", 
            "April", "May", "June", "July", "August", "September", 
            "October", "November", "December");

        return d.getDate() + " " + months[d.getMonth()];
    }


}
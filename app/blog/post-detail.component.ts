import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Observable} from 'rxjs/Observable';

import { Page } from "ui/page";
import { Post } from "./post";
import { BlogService } from "./blog.service";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.css"],
})

export class PostDetailComponent implements OnInit {
    post: Post;
    data: Observable<Array<Post>>;

    constructor(
        private blogService: BlogService,
        private route: ActivatedRoute,
        page: Page
    )
    {page.actionBarHidden = true;}

    ngOnInit(): void {
        const title = +this.route.snapshot.params["title"];
        this.data = this.blogService.posts();
    }
}
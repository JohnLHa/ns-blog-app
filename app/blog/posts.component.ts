import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Post } from "./post"
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-telerik-ui/sidedrawer';
import { BlogService } from "./blog.service";
import { SideDrawerGettingStartedComponent } from "./drawer.component";


@Component({
    selector: "blog-posts",
    moduleId: module.id,
    templateUrl: "./posts.component.html",
    styleUrls: ["./post_comp.css"],
    providers: [BlogService]
})
export class PostsComponent implements OnInit {
    posts: Array<Post> = [];
    public searchPhrase: string;
    isSearching = false;

    constructor(
        private data: BlogService,
        private page: Page) 
            {
                page.actionBarHidden = true; 
            }

    //On Init pulls and saves Posts into a post array<Post>
    ngOnInit(): void {
        this.data.posts().subscribe(posts=>{
            posts.forEach(post=>this.posts.push(post))
        });
    }

    //Allows the user to search for a certain blog post.
    //Needs to be finished.
    public search(){
        if(!this.isSearching){
            this.isSearching=true;
        }
    }
}


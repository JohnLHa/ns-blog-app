import { Component } from "@angular/core";
import { Post } from "./post"
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RouterExtensions} from "nativescript-angular/router";


@Component({
    selector: "fake-page",
    moduleId: module.id,
    templateUrl: "./fake.html"
})
export class FakePageComponent {

    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {

    }

    public goBack(){
        this.routerExtensions.back();
    }

    //Share button to share a blog through social media.
    public share(){
        alert("You have pressed the share button.");
    }

    //Saves the blog post to the user's bookmarks.
    //Needs to be finished.
    public bookmark(){
        alert("You have pressed the bookmark button.");
    }
}
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PostsComponent } from "./blog/posts.component"
import { PostDetailComponent } from "./blog/post-detail.component"
import { CommentComponent } from "./blog/comment.component"
import { FakePageComponent } from "./blog/fakepage.component";

const routes: Routes = [
    { path: "", redirectTo: "/posts", pathMatch: "full" },
    { path: "posts", component: PostsComponent },
    { path: "post/:id", component: PostDetailComponent},
    { path: "post/:id", component: CommentComponent},
    { path: "fake", component: FakePageComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

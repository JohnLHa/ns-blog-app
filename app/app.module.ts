import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http"
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-telerik-ui/sidedrawer/angular";
import { PostsComponent } from "./blog/posts.component"
import { BlogService } from "./blog/blog.service"
import { PostDetailComponent } from "./blog/post-detail.component"
import { TNSFrescoModule } from "nativescript-fresco/angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { SideDrawerGettingStartedComponent } from "./blog/drawer.component"
import { CommentComponent } from "./blog/comment.component";
import { FakePageComponent } from "./blog/fakepage.component";
import { SearchBarComponent } from "./blog/searchbar.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        TNSFrescoModule,
        NativeScriptUISideDrawerModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        LISTVIEW_DIRECTIVES,
        AppComponent,
        PostsComponent,
        SideDrawerGettingStartedComponent,
        PostDetailComponent,
        CommentComponent,
        FakePageComponent,
        SearchBarComponent
        
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    providers: [
        BlogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

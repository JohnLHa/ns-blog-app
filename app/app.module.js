"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-telerik-ui/listview/angular");
var angular_2 = require("nativescript-telerik-ui/sidedrawer/angular");
var posts_component_1 = require("./blog/posts.component");
var blog_service_1 = require("./blog/blog.service");
var post_detail_component_1 = require("./blog/post-detail.component");
var angular_3 = require("nativescript-fresco/angular");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var drawer_component_1 = require("./blog/drawer.component");
var comment_component_1 = require("./blog/comment.component");
var login_component_1 = require("./blog/login.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            angular_3.TNSFrescoModule,
            angular_2.NativeScriptUISideDrawerModule,
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            angular_1.LISTVIEW_DIRECTIVES,
            app_component_1.AppComponent,
            posts_component_1.PostsComponent,
            drawer_component_1.SideDrawerGettingStartedComponent,
            post_detail_component_1.PostDetailComponent,
            comment_component_1.CommentComponent,
            login_component_1.LoginComponent
        ],
        exports: [
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule
        ],
        providers: [
            blog_service_1.BlogService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFrRTtBQUNsRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLG9FQUErRTtBQUUvRSxzRUFBNEY7QUFDNUYsMERBQXVEO0FBQ3ZELG9EQUFpRDtBQUNqRCxzRUFBa0U7QUFDbEUsdURBQThEO0FBQzlELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFDckUsNERBQTJFO0FBQzNFLDhEQUE0RDtBQUM1RCwwREFBd0Q7QUFxQ3hELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQWpDckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHlCQUFlO1lBQ2Ysd0NBQThCO1lBQzlCLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsNkJBQXNCO1lBQ3RCLDhCQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLDZCQUFtQjtZQUNuQiw0QkFBWTtZQUNaLGdDQUFjO1lBQ2Qsb0RBQWlDO1lBQ2pDLDJDQUFtQjtZQUNuQixvQ0FBZ0I7WUFDaEIsZ0NBQWM7U0FFakI7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsaUNBQXdCO1NBQzNCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsMEJBQVc7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCJcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTElTVFZJRVdfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBQb3N0c0NvbXBvbmVudCB9IGZyb20gXCIuL2Jsb2cvcG9zdHMuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9ibG9nL2Jsb2cuc2VydmljZVwiXHJcbmltcG9ydCB7IFBvc3REZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9ibG9nL3Bvc3QtZGV0YWlsLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IFROU0ZyZXNjb01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZnJlc2NvL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTaWRlRHJhd2VyR2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQgfSBmcm9tIFwiLi9ibG9nL2RyYXdlci5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDb21tZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vYmxvZy9jb21tZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2Jsb2cvbG9naW4uY29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVE5TRnJlc2NvTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTElTVFZJRVdfRElSRUNUSVZFUyxcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgUG9zdHNDb21wb25lbnQsXHJcbiAgICAgICAgU2lkZURyYXdlckdldHRpbmdTdGFydGVkQ29tcG9uZW50LFxyXG4gICAgICAgIFBvc3REZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWVudENvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudFxyXG4gICAgICAgIFxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQmxvZ1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=
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
            comment_component_1.CommentComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFrRTtBQUNsRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLG9FQUErRTtBQUUvRSxzRUFBNEY7QUFDNUYsMERBQXVEO0FBQ3ZELG9EQUFpRDtBQUNqRCxzRUFBa0U7QUFDbEUsdURBQThEO0FBQzlELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFDckUsNERBQTJFO0FBQzNFLDhEQUE0RDtBQW1DNUQsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBaENyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wseUJBQWU7WUFDZix3Q0FBOEI7WUFDOUIsd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsOEJBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNkJBQW1CO1lBQ25CLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCxvREFBaUM7WUFDakMsMkNBQW1CO1lBQ25CLG9DQUFnQjtTQUVuQjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQixpQ0FBd0I7U0FDM0I7UUFDRCxTQUFTLEVBQUU7WUFDUCwwQkFBVztTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIlxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMSVNUVklFV19ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhcic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFBvc3RzQ29tcG9uZW50IH0gZnJvbSBcIi4vYmxvZy9wb3N0cy5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gXCIuL2Jsb2cvYmxvZy5zZXJ2aWNlXCJcclxuaW1wb3J0IHsgUG9zdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2Jsb2cvcG9zdC1kZXRhaWwuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgVE5TRnJlc2NvTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mcmVzY28vYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IFNpZGVEcmF3ZXJHZXR0aW5nU3RhcnRlZENvbXBvbmVudCB9IGZyb20gXCIuL2Jsb2cvZHJhd2VyLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9ibG9nL2NvbW1lbnQuY29tcG9uZW50XCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBUTlNGcmVzY29Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBMSVNUVklFV19ESVJFQ1RJVkVTLFxyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBQb3N0c0NvbXBvbmVudCxcclxuICAgICAgICBTaWRlRHJhd2VyR2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQsXHJcbiAgICAgICAgUG9zdERldGFpbENvbXBvbmVudCxcclxuICAgICAgICBDb21tZW50Q29tcG9uZW50XHJcbiAgICAgICAgXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBCbG9nU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
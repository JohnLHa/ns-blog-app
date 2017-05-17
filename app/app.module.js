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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFrRTtBQUNsRSw2Q0FBaUQ7QUFDakQsaURBQStDO0FBQy9DLG9FQUErRTtBQUUvRSxzRUFBNEY7QUFDNUYsMERBQXVEO0FBQ3ZELG9EQUFpRDtBQUNqRCxzRUFBa0U7QUFDbEUsdURBQThEO0FBQzlELHNEQUF1RTtBQUV2RSw0REFBMkU7QUFDM0UsOERBQTREO0FBbUM1RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUEvQnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx5QkFBZTtZQUNmLHdDQUE4QjtZQUM5Qix3Q0FBa0I7WUFDbEIsNkJBQXNCO1lBQ3RCLDhCQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLDZCQUFtQjtZQUNuQiw0QkFBWTtZQUNaLGdDQUFjO1lBQ2Qsb0RBQWlDO1lBQ2pDLDJDQUFtQjtZQUNuQixvQ0FBZ0I7U0FFbkI7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsaUNBQXdCO1NBQzNCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsMEJBQVc7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCJcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTElTVFZJRVdfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL2xpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBQb3N0c0NvbXBvbmVudCB9IGZyb20gXCIuL2Jsb2cvcG9zdHMuY29tcG9uZW50XCJcclxuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9ibG9nL2Jsb2cuc2VydmljZVwiXHJcbmltcG9ydCB7IFBvc3REZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9ibG9nL3Bvc3QtZGV0YWlsLmNvbXBvbmVudFwiXHJcbmltcG9ydCB7IFROU0ZyZXNjb01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZnJlc2NvL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTaWRlRHJhd2VyR2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQgfSBmcm9tIFwiLi9ibG9nL2RyYXdlci5jb21wb25lbnRcIlxyXG5pbXBvcnQgeyBDb21tZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vYmxvZy9jb21tZW50LmNvbXBvbmVudFwiO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFROU0ZyZXNjb01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIExJU1RWSUVXX0RJUkVDVElWRVMsXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIFBvc3RzQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZGVEcmF3ZXJHZXR0aW5nU3RhcnRlZENvbXBvbmVudCxcclxuICAgICAgICBQb3N0RGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIENvbW1lbnRDb21wb25lbnRcclxuICAgICAgICBcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEJsb2dTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var blog_service_1 = require("./blog.service");
var PostDetailComponent = (function () {
    function PostDetailComponent(blogService, route, page) {
        this.blogService = blogService;
        this.route = route;
        page.actionBarHidden = true;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var title = +this.route.snapshot.params["title"];
        this.data = this.blogService.posts();
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./post-detail.component.html",
        styleUrls: ["./post-detail.css"],
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService,
        router_1.ActivatedRoute,
        page_1.Page])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBUzdDLElBQWEsbUJBQW1CO0lBSTVCLDZCQUNZLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQzdCLElBQVU7UUFGRixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUdoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUFBLENBQUM7SUFFOUIsc0NBQVEsR0FBUjtRQUNJLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLG1CQUFtQjtJQVAvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDbkMsQ0FBQztxQ0FPMkIsMEJBQVc7UUFDakIsdUJBQWM7UUFDdkIsV0FBSTtHQVBMLG1CQUFtQixDQWUvQjtBQWZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gXCIuL2Jsb2cuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Bvc3QtZGV0YWlsLmNzc1wiXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBvc3Q6IFBvc3Q7XHJcbiAgICBkYXRhOiBPYnNlcnZhYmxlPEFycmF5PFBvc3Q+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGJsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwYWdlOiBQYWdlXHJcbiAgICApXHJcbiAgICB7cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcInRpdGxlXCJdO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuYmxvZ1NlcnZpY2UucG9zdHMoKTtcclxuICAgIH1cclxufSJdfQ==
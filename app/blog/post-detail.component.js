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
        var slug = this.route.snapshot.params["slug"];
        this.data = this.blogService.posts();
        this.posts = this.blogService.getPostBySlug(slug);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBUzdDLElBQWEsbUJBQW1CO0lBSTVCLDZCQUNZLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQzdCLElBQVU7UUFGRixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUdoQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUFBLENBQUM7SUFFOUIsc0NBQVEsR0FBUjtRQUNJLElBQU0sSUFBSSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLG1CQUFtQjtJQVAvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDbkMsQ0FBQztxQ0FPMkIsMEJBQVc7UUFDakIsdUJBQWM7UUFDdkIsV0FBSTtHQVBMLG1CQUFtQixDQWdCL0I7QUFoQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcG9zdC1kZXRhaWwuY3NzXCJdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3REZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcG9zdHM6IFBvc3Q7XHJcbiAgICBkYXRhOiBPYnNlcnZhYmxlPEFycmF5PFBvc3Q+PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGJsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwYWdlOiBQYWdlXHJcbiAgICApXHJcbiAgICB7cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzbHVnOiBzdHJpbmcgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcInNsdWdcIl07XHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5ibG9nU2VydmljZS5wb3N0cygpO1xyXG4gICAgICAgIHRoaXMucG9zdHMgPSB0aGlzLmJsb2dTZXJ2aWNlLmdldFBvc3RCeVNsdWcoc2x1Zyk7XHJcbiAgICB9XHJcbn0iXX0=
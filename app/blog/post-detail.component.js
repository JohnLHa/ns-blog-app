"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var blog_service_1 = require("./blog.service");
var router_2 = require("nativescript-angular/router");
var router_3 = require("nativescript-angular/router");
var PostDetailComponent = (function () {
    function PostDetailComponent(routerExtensions, blogService, route, page, pageRoute) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.blogService = blogService;
        this.route = route;
        this.page = page;
        this.pageRoute = pageRoute;
        this.curDate = this.getDate();
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.slug = params["id"];
            _this.post = params["id"]; //don't know why this is needed, but can't function without it
        });
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.getPostInfo();
    };
    // Pulls the current Post info using the slug.
    PostDetailComponent.prototype.getPostInfo = function () {
        var _this = this;
        this.blogService.getPostBySlug(this.slug)
            .subscribe(function (x) {
            JSON.stringify(x);
            _this.post = x;
        });
    };
    //Back button to return to previous page.
    PostDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    //Share button to share a blog through social media.
    //Needs to be finished.
    PostDetailComponent.prototype.share = function () {
        alert("You have pressed the share button.");
    };
    //Saves the blog post to the user's bookmarks.
    //Needs to be finished.
    PostDetailComponent.prototype.bookmark = function () {
        alert("You have pressed the bookmark button.");
    };
    PostDetailComponent.prototype.getDate = function () {
        var d = new Date();
        var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        return d.getDate() + " " + months[d.getMonth()];
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    core_1.Component({
        selector: "post-details",
        moduleId: module.id,
        templateUrl: "./post-detail.component.html",
        styleUrls: ["./post-detail.css"],
        providers: [blog_service_1.BlogService]
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        blog_service_1.BlogService,
        router_1.ActivatedRoute,
        page_1.Page,
        router_3.PageRoute])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQUU5RCxzREFBd0Q7QUFVeEQsSUFBYSxtQkFBbUI7SUFPNUIsNkJBQ1ksZ0JBQWtDLEVBQ2xDLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLElBQVUsRUFDVixTQUFvQjtRQUxoQyxpQkFnQkM7UUFmVyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBUmhDLFlBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFZckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsOERBQThEO1FBQ2hHLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDhDQUE4QztJQUM5Qyx5Q0FBVyxHQUFYO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDUixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUF5QztJQUNsQyxvQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsdUJBQXVCO0lBQ2hCLG1DQUFLLEdBQVo7UUFDSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsOENBQThDO0lBQzlDLHVCQUF1QjtJQUNoQixzQ0FBUSxHQUFmO1FBQ0ksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLHFDQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFDckQsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdMLDBCQUFDO0FBQUQsQ0FBQyxBQWpFRCxJQWlFQztBQWpFWSxtQkFBbUI7SUFSL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FVZ0MseUJBQWdCO1FBQ3JCLDBCQUFXO1FBQ2pCLHVCQUFjO1FBQ2YsV0FBSTtRQUNDLGtCQUFTO0dBWnZCLG1CQUFtQixDQWlFL0I7QUFqRVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuL2NvbW1lbnRcIjsgXHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjsgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBvc3QtZGV0YWlsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wb3N0LWRldGFpbC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBvc3Q6IE9ic2VydmFibGU8UG9zdD47XHJcbiAgICB0aGVQb3N0OiBQb3N0O1xyXG4gICAgc2x1Zzogc3RyaW5nO1xyXG4gICAgY3VyRGF0ZSA9IHRoaXMuZ2V0RGF0ZSgpO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBibG9nU2VydmljZTogQmxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGVcclxuXHJcbiAgICApXHJcbiAgICB7Ly9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsdWcgPSBwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHBhcmFtc1tcImlkXCJdOyAvL2Rvbid0IGtub3cgd2h5IHRoaXMgaXMgbmVlZGVkLCBidXQgY2FuJ3QgZnVuY3Rpb24gd2l0aG91dCBpdFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdldFBvc3RJbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVsbHMgdGhlIGN1cnJlbnQgUG9zdCBpbmZvIHVzaW5nIHRoZSBzbHVnLlxyXG4gICAgZ2V0UG9zdEluZm8oKXtcclxuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLmdldFBvc3RCeVNsdWcodGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4geyBcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0geDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL0JhY2sgYnV0dG9uIHRvIHJldHVybiB0byBwcmV2aW91cyBwYWdlLlxyXG4gICAgcHVibGljIGdvQmFjaygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaGFyZSBidXR0b24gdG8gc2hhcmUgYSBibG9nIHRocm91Z2ggc29jaWFsIG1lZGlhLlxyXG4gICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZC5cclxuICAgIHB1YmxpYyBzaGFyZSgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgc2hhcmUgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NhdmVzIHRoZSBibG9nIHBvc3QgdG8gdGhlIHVzZXIncyBib29rbWFya3MuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIGJvb2ttYXJrKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBib29rbWFyayBidXR0b24uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRlKCl7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aHMgPSBuZXcgQXJyYXkoXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcclxuICAgICAgICAgICAgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFxyXG4gICAgICAgICAgICBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZC5nZXREYXRlKCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=
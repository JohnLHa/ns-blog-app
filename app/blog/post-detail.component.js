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
        this.isLoading = false;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.slug = params["id"];
            _this.post = params["id"]; //don't know why this is needed, but can't function without it
        });
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
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
        this.isLoading = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQUU5RCxzREFBd0Q7QUFVeEQsSUFBYSxtQkFBbUI7SUFRNUIsNkJBQ1ksZ0JBQWtDLEVBQ2xDLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLElBQVUsRUFDVixTQUFvQjtRQUxoQyxpQkFnQkM7UUFmVyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBVGhDLFlBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVlkLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDhEQUE4RDtRQUNoRyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMseUNBQVcsR0FBWDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNwQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCx5Q0FBeUM7SUFDbEMsb0NBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0RBQW9EO0lBQ3BELHVCQUF1QjtJQUNoQixtQ0FBSyxHQUFaO1FBQ0ksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDaEIsc0NBQVEsR0FBZjtRQUNJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxxQ0FBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFDakQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQ3JELFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFHTCwwQkFBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFwRVksbUJBQW1CO0lBUi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBV2dDLHlCQUFnQjtRQUNyQiwwQkFBVztRQUNqQix1QkFBYztRQUNmLFdBQUk7UUFDQyxrQkFBUztHQWJ2QixtQkFBbUIsQ0FvRS9CO0FBcEVZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gXCIuL2Jsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCI7IFxyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7IFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJwb3N0LWRldGFpbHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcG9zdC1kZXRhaWwuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbQmxvZ1NlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwb3N0OiBPYnNlcnZhYmxlPFBvc3Q+O1xyXG4gICAgdGhlUG9zdDogUG9zdDtcclxuICAgIHNsdWc6IHN0cmluZztcclxuICAgIGN1ckRhdGUgPSB0aGlzLmdldERhdGUoKTtcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBibG9nU2VydmljZTogQmxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGVcclxuXHJcbiAgICApXHJcbiAgICB7Ly9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsdWcgPSBwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHBhcmFtc1tcImlkXCJdOyAvL2Rvbid0IGtub3cgd2h5IHRoaXMgaXMgbmVlZGVkLCBidXQgY2FuJ3QgZnVuY3Rpb24gd2l0aG91dCBpdFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZXRQb3N0SW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1bGxzIHRoZSBjdXJyZW50IFBvc3QgaW5mbyB1c2luZyB0aGUgc2x1Zy5cclxuICAgIGdldFBvc3RJbmZvKCl7XHJcbiAgICAgICAgdGhpcy5ibG9nU2VydmljZS5nZXRQb3N0QnlTbHVnKHRoaXMuc2x1ZylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHsgXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL0JhY2sgYnV0dG9uIHRvIHJldHVybiB0byBwcmV2aW91cyBwYWdlLlxyXG4gICAgcHVibGljIGdvQmFjaygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaGFyZSBidXR0b24gdG8gc2hhcmUgYSBibG9nIHRocm91Z2ggc29jaWFsIG1lZGlhLlxyXG4gICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZC5cclxuICAgIHB1YmxpYyBzaGFyZSgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgc2hhcmUgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NhdmVzIHRoZSBibG9nIHBvc3QgdG8gdGhlIHVzZXIncyBib29rbWFya3MuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIGJvb2ttYXJrKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBib29rbWFyayBidXR0b24uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRlKCl7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aHMgPSBuZXcgQXJyYXkoXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcclxuICAgICAgICAgICAgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFxyXG4gICAgICAgICAgICBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZC5nZXREYXRlKCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=
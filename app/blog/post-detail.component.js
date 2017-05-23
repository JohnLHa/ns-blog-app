"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var blog_service_1 = require("./blog.service");
var router_2 = require("nativescript-angular/router");
var router_3 = require("nativescript-angular/router");
var SocialShare = require("nativescript-social-share");
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
    PostDetailComponent.prototype.share = function () {
        SocialShare.shareText(this.post.body, this.post.title);
    };
    //Saves the blog post to the user's bookmarks.
    //Needs to be finished.
    PostDetailComponent.prototype.bookmark = function () {
        alert("You have pressed the bookmark button.");
    };
    //Goes to the future category page.
    //Needs to be finished.
    PostDetailComponent.prototype.category = function () {
        alert("You have pressed the category button.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQUU5RCxzREFBd0Q7QUFDeEQsdURBQXlEO0FBVXpELElBQWEsbUJBQW1CO0lBUTVCLDZCQUNZLGdCQUFrQyxFQUNsQyxXQUF3QixFQUN4QixLQUFxQixFQUNyQixJQUFVLEVBQ1YsU0FBb0I7UUFMaEMsaUJBZ0JDO1FBZlcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVRoQyxZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFZZCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNsRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4REFBOEQ7UUFDaEcsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsOENBQThDO0lBQzlDLHlDQUFXLEdBQVg7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDcEMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQseUNBQXlDO0lBQ2xDLG9DQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELG9EQUFvRDtJQUM3QyxtQ0FBSyxHQUFaO1FBQ0ksV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ2hCLHNDQUFRLEdBQWY7UUFDSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUNoQixzQ0FBUSxHQUFmO1FBQ0ksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLHFDQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFDckQsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdMLDBCQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQztBQXpFWSxtQkFBbUI7SUFSL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FXZ0MseUJBQWdCO1FBQ3JCLDBCQUFXO1FBQ2pCLHVCQUFjO1FBQ2YsV0FBSTtRQUNDLGtCQUFTO0dBYnZCLG1CQUFtQixDQXlFL0I7QUF6RVksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuL2NvbW1lbnRcIjsgXHJcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjsgXHJcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBvc3QtZGV0YWlsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wb3N0LWRldGFpbC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBvc3Q6IFBvc3Q7XHJcbiAgICB0aGVQb3N0OiBQb3N0O1xyXG4gICAgc2x1Zzogc3RyaW5nO1xyXG4gICAgY3VyRGF0ZSA9IHRoaXMuZ2V0RGF0ZSgpO1xyXG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGJsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZVxyXG5cclxuICAgIClcclxuICAgIHsvL3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2x1ZyA9IHBhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcGFyYW1zW1wiaWRcIl07IC8vZG9uJ3Qga25vdyB3aHkgdGhpcyBpcyBuZWVkZWQsIGJ1dCBjYW4ndCBmdW5jdGlvbiB3aXRob3V0IGl0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdldFBvc3RJbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVsbHMgdGhlIGN1cnJlbnQgUG9zdCBpbmZvIHVzaW5nIHRoZSBzbHVnLlxyXG4gICAgZ2V0UG9zdEluZm8oKXtcclxuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLmdldFBvc3RCeVNsdWcodGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4geyBcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0geDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQmFjayBidXR0b24gdG8gcmV0dXJuIHRvIHByZXZpb3VzIHBhZ2UuXHJcbiAgICBwdWJsaWMgZ29CYWNrKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NoYXJlIGJ1dHRvbiB0byBzaGFyZSBhIGJsb2cgdGhyb3VnaCBzb2NpYWwgbWVkaWEuXHJcbiAgICBwdWJsaWMgc2hhcmUoKXtcclxuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQodGhpcy5wb3N0LmJvZHksIHRoaXMucG9zdC50aXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TYXZlcyB0aGUgYmxvZyBwb3N0IHRvIHRoZSB1c2VyJ3MgYm9va21hcmtzLlxyXG4gICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZC5cclxuICAgIHB1YmxpYyBib29rbWFyaygpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgYm9va21hcmsgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0dvZXMgdG8gdGhlIGZ1dHVyZSBjYXRlZ29yeSBwYWdlLlxyXG4gICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZC5cclxuICAgIHB1YmxpYyBjYXRlZ29yeSgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgY2F0ZWdvcnkgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RGF0ZSgpe1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGhzID0gbmV3IEFycmF5KFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXHJcbiAgICAgICAgICAgIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcclxuICAgICAgICAgICAgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGQuZ2V0RGF0ZSgpICsgXCIgXCIgKyBtb250aHNbZC5nZXRNb250aCgpXTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
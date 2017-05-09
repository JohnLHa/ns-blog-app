"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var blog_service_1 = require("./blog.service");
var PostsComponent = (function () {
    function PostsComponent(data) {
        this.data = data;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.posts().subscribe(function (posts) {
            posts.forEach(function (post) { return _this.posts.push(post); });
        });
        /*Hoping to hard code some pictures in for now.
        
        this.posts[0].pic = "http://www.fillmurray.com/200/300";
        this.posts[1].pic = "http://www.fillmurray.com/300/400"; */
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: "blog-posts",
        moduleId: module.id,
        templateUrl: "./posts.component.html",
        styleUrls: ["./post_comp.css"],
        providers: [blog_service_1.BlogService]
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE0QztBQVM1QyxJQUFhLGNBQWM7SUFHdkIsd0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFFaUIsQ0FBQztJQUUxQyxpQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDSDs7O21FQUcyRDtJQUMvRCxDQUFDO0lBR0wscUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzlCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FJNEIsMEJBQVc7R0FINUIsY0FBYyxDQWdCMUI7QUFoQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCJcclxuXHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy5zZXJ2aWNlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYmxvZy1wb3N0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdHMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wb3N0X2NvbXAuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbQmxvZ1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwb3N0czogQXJyYXk8UG9zdD4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEJsb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9zdHMoKS5zdWJzY3JpYmUocG9zdHM9PntcclxuICAgICAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0PT50aGlzLnBvc3RzLnB1c2gocG9zdCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLypIb3BpbmcgdG8gaGFyZCBjb2RlIHNvbWUgcGljdHVyZXMgaW4gZm9yIG5vdy5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnBvc3RzWzBdLnBpYyA9IFwiaHR0cDovL3d3dy5maWxsbXVycmF5LmNvbS8yMDAvMzAwXCI7XHJcbiAgICAgICAgdGhpcy5wb3N0c1sxXS5waWMgPSBcImh0dHA6Ly93d3cuZmlsbG11cnJheS5jb20vMzAwLzQwMFwiOyAqLyAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
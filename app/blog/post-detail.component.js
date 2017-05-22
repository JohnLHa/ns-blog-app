"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var blog_service_1 = require("./blog.service");
var router_2 = require("nativescript-angular/router");
var comment_1 = require("./comment");
var comment_component_1 = require("./comment.component");
var router_3 = require("nativescript-angular/router");
var PostDetailComponent = (function () {
    function PostDetailComponent(routerExtensions, blogService, route, page, commentComponent, pageRoute) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.blogService = blogService;
        this.route = route;
        this.page = page;
        this.commentComponent = commentComponent;
        this.pageRoute = pageRoute;
        this.comments = [];
        this.curDate = this.getDate();
        this.phrase = "";
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.slug = params["id"];
            _this.post = params["id"]; //don't know why this is needed, but can't function without it
        });
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.getPostInfo();
        this.getComments();
    };
    //Pulls the current Post info using the slug.
    PostDetailComponent.prototype.getPostInfo = function () {
        var _this = this;
        this.blogService.getPostBySlug(this.slug)
            .subscribe(function (x) {
            JSON.stringify(x);
            _this.post = x;
        });
    };
    //Pulls all Comments from the blog API and stores it into a comments array<Comment>
    PostDetailComponent.prototype.getComments = function () {
        var _this = this;
        this.blogService.getComments(this.slug)
            .subscribe(function (comments) {
            comments.forEach(function (comment) { return _this.comments.push(comment); });
        });
    };
    //Adds a Comment object to the blog API from user input
    PostDetailComponent.prototype.addComment = function () {
        var _this = this;
        //Checks to make sure a comment went through
        if (!this.phrase) {
            console.log("Message was not found.");
            return;
        }
        //Creates a new comment and posts using the user's information.
        //Currently hardcoded: email and name. Guid can stay since it's not used.
        //Needs to be finished after login section works.
        this.comment = new comment_1.Comment("12345678-9100-poop-guid-amverymature", "abc@gmail.com", this.phrase, "John", new Date());
        this.blogService.postComment(this.comment, this.slug)
            .subscribe(function (comment) {
            _this.comments.push(comment);
        });
        alert("Your comment has been posted below.");
    };
    PostDetailComponent.prototype.deleteComment = function (item) {
        var _this = this;
        //Checks to make sure a comment went through
        if (!item) {
            console.log("Comment was not found.");
            return;
        }
        //Calls BlogService to delete the comment
        this.blogService.deleteComment(item.id)
            .subscribe(function (comments) {
            comments.forEach(function (comment) { return _this.comments.push(comment); });
        });
        alert("Your comment was deleted. Please refresh.");
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
__decorate([
    core_1.Input(),
    __metadata("design:type", comment_1.Comment)
], PostDetailComponent.prototype, "comment", void 0);
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
        comment_component_1.CommentComponent,
        router_3.PageRoute])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQUM5RCxxQ0FBb0M7QUFFcEMseURBQXVEO0FBQ3ZELHNEQUF3RDtBQVV4RCxJQUFhLG1CQUFtQjtJQWU1Qiw2QkFDWSxnQkFBa0MsRUFDbEMsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsSUFBVSxFQUNWLGdCQUFrQyxFQUNsQyxTQUFvQjtRQU5oQyxpQkFpQkM7UUFoQlcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBbEJoQyxhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQU85QixZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBRSxFQUFFLENBQUM7UUFjUCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNsRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4REFBOEQ7UUFDaEcsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUVJLElBQUksQ0FB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QUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQ2pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUNyRCxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUwsMEJBQUM7QUFBRCxDQUFDLEFBckhELElBcUhDO0FBeEdZO0lBQVIsWUFBSyxFQUFFOzhCQUFVLGlCQUFPO29EQUFDO0FBYmpCLG1CQUFtQjtJQVIvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDaEMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUMzQixDQUFDO3FDQWtCZ0MseUJBQWdCO1FBQ3JCLDBCQUFXO1FBQ2pCLHVCQUFjO1FBQ2YsV0FBSTtRQUNRLG9DQUFnQjtRQUN2QixrQkFBUztHQXJCdkIsbUJBQW1CLENBcUgvQjtBQXJIWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuL2NvbW1lbnRcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21tZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBvc3QtZGV0YWlsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wb3N0LWRldGFpbC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBvc3Q6IE9ic2VydmFibGU8UG9zdD47XHJcbiAgICBwb3N0czogQXJyYXk8UG9zdD4gXHJcbiAgICBjb21tZW50czogQXJyYXk8Q29tbWVudD4gPSBbXTtcclxuICAgIGRhdGE6IE9ic2VydmFibGU8QXJyYXk8UG9zdD4+O1xyXG4gICAgdGhlUG9zdDogUG9zdDtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBib2R5OiBzdHJpbmc7XHJcbiAgICBzbHVnOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY3VyRGF0ZSA9IHRoaXMuZ2V0RGF0ZSgpO1xyXG4gICAgcGhyYXNlPSBcIlwiO1xyXG5cclxuICAgIEBJbnB1dCgpIGNvbW1lbnQ6IENvbW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgYmxvZ1NlcnZpY2U6IEJsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIGNvbW1lbnRDb21wb25lbnQ6IENvbW1lbnRDb21wb25lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZVxyXG5cclxuICAgIClcclxuICAgIHsvL3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2x1ZyA9IHBhcmFtc1tcImlkXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0gcGFyYW1zW1wiaWRcIl07IC8vZG9uJ3Qga25vdyB3aHkgdGhpcyBpcyBuZWVkZWQsIGJ1dCBjYW4ndCBmdW5jdGlvbiB3aXRob3V0IGl0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2V0UG9zdEluZm8oKTtcclxuICAgICAgICB0aGlzLmdldENvbW1lbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9QdWxscyB0aGUgY3VycmVudCBQb3N0IGluZm8gdXNpbmcgdGhlIHNsdWcuXHJcbiAgICBnZXRQb3N0SW5mbygpe1xyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0UG9zdEJ5U2x1Zyh0aGlzLnNsdWcpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB7IFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSB4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUHVsbHMgYWxsIENvbW1lbnRzIGZyb20gdGhlIGJsb2cgQVBJIGFuZCBzdG9yZXMgaXQgaW50byBhIGNvbW1lbnRzIGFycmF5PENvbW1lbnQ+XHJcbiAgICBnZXRDb21tZW50cygpIHtcclxuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLmdldENvbW1lbnRzKHRoaXMuc2x1ZylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50cz0+e1xyXG4gICAgICAgICAgICBjb21tZW50cy5mb3JFYWNoKGNvbW1lbnQ9PnRoaXMuY29tbWVudHMucHVzaChjb21tZW50KSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9BZGRzIGEgQ29tbWVudCBvYmplY3QgdG8gdGhlIGJsb2cgQVBJIGZyb20gdXNlciBpbnB1dFxyXG4gICAgYWRkQ29tbWVudCgpIHtcclxuICAgICAgICAvL0NoZWNrcyB0byBtYWtlIHN1cmUgYSBjb21tZW50IHdlbnQgdGhyb3VnaFxyXG4gICAgICAgIGlmICghdGhpcy5waHJhc2UpIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSB3YXMgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ3JlYXRlcyBhIG5ldyBjb21tZW50IGFuZCBwb3N0cyB1c2luZyB0aGUgdXNlcidzIGluZm9ybWF0aW9uLlxyXG4gICAgICAgIC8vQ3VycmVudGx5IGhhcmRjb2RlZDogZW1haWwgYW5kIG5hbWUuIEd1aWQgY2FuIHN0YXkgc2luY2UgaXQncyBub3QgdXNlZC5cclxuICAgICAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkIGFmdGVyIGxvZ2luIHNlY3Rpb24gd29ya3MuXHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IG5ldyBDb21tZW50KFwiMTIzNDU2NzgtOTEwMC1wb29wLWd1aWQtYW12ZXJ5bWF0dXJlXCIsIFwiYWJjQGdtYWlsLmNvbVwiLCB0aGlzLnBocmFzZSwgXCJKb2huXCIsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLnBvc3RDb21tZW50KHRoaXMuY29tbWVudCwgdGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50ID0+IHt0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBjb21tZW50IGhhcyBiZWVuIHBvc3RlZCBiZWxvdy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ29tbWVudChpdGVtOiBDb21tZW50KXtcclxuXHJcbiAgICAgICAgLy9DaGVja3MgdG8gbWFrZSBzdXJlIGEgY29tbWVudCB3ZW50IHRocm91Z2hcclxuICAgICAgICBpZiAoIWl0ZW0pIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCB3YXMgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAvL0NhbGxzIEJsb2dTZXJ2aWNlIHRvIGRlbGV0ZSB0aGUgY29tbWVudFxyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZGVsZXRlQ29tbWVudChpdGVtLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cy5mb3JFYWNoKGNvbW1lbnQ9PnRoaXMuY29tbWVudHMucHVzaChjb21tZW50KSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgYWxlcnQoXCJZb3VyIGNvbW1lbnQgd2FzIGRlbGV0ZWQuIFBsZWFzZSByZWZyZXNoLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0JhY2sgYnV0dG9uIHRvIHJldHVybiB0byBwcmV2aW91cyBwYWdlLlxyXG4gICAgcHVibGljIGdvQmFjaygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaGFyZSBidXR0b24gdG8gc2hhcmUgYSBibG9nIHRocm91Z2ggc29jaWFsIG1lZGlhLlxyXG4gICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZC5cclxuICAgIHB1YmxpYyBzaGFyZSgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgc2hhcmUgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NhdmVzIHRoZSBibG9nIHBvc3QgdG8gdGhlIHVzZXIncyBib29rbWFya3MuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIGJvb2ttYXJrKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBib29rbWFyayBidXR0b24uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREYXRlKCl7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aHMgPSBuZXcgQXJyYXkoXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcclxuICAgICAgICAgICAgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFxyXG4gICAgICAgICAgICBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZC5nZXREYXRlKCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0=
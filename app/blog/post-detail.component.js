"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var blog_service_1 = require("./blog.service");
var router_2 = require("nativescript-angular/router");
var comment_1 = require("./comment");
var router_3 = require("nativescript-angular/router");
var dialogs = require("ui/dialogs"); //Used for the login dialog
var PostDetailComponent = (function () {
    function PostDetailComponent(routerExtensions, blogService, route, page, pageRoute) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.blogService = blogService;
        this.route = route;
        this.page = page;
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
    PostDetailComponent.prototype.login = function () {
        dialogs.login({
            title: "Login",
            message: "Please login using your email and password",
            okButtonText: "Login",
            cancelButtonText: "Cancel",
            neutralButtonText: "Sign Up",
            userName: "",
            password: ""
        }).then(function (r) {
            if (r.result) {
                console.log("Result was true or Login button");
            }
            else if (r.result == undefined) {
                console.log("Result was undefined or Register button");
            }
            else if (!r.result) {
                console.log("Result was false or Cancel button");
            }
        });
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
        router_3.PageRoute])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQUM5RCxxQ0FBb0M7QUFHcEMsc0RBQXdEO0FBRXhELG9DQUFzQyxDQUFDLDJCQUEyQjtBQVVsRSxJQUFhLG1CQUFtQjtJQWU1Qiw2QkFDWSxnQkFBa0MsRUFDbEMsV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsSUFBVSxFQUNWLFNBQW9CO1FBTGhDLGlCQWdCQztRQWZXLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFqQmhDLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBTzlCLFlBQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFFLEVBQUUsQ0FBQztRQWFQLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDWixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDhEQUE4RDtRQUNoRyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxX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QztBQS9IWTtJQUFSLFlBQUssRUFBRTs4QkFBVSxpQkFBTztvREFBQztBQWJqQixtQkFBbUI7SUFSL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FrQmdDLHlCQUFnQjtRQUNyQiwwQkFBVztRQUNqQix1QkFBYztRQUNmLFdBQUk7UUFDQyxrQkFBUztHQXBCdkIsbUJBQW1CLENBNEkvQjtBQTVJWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9ibG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi4vY29tbWVudFwiOyBcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7IC8vUG9zc2libHkgcmVtb3ZlXHJcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21tZW50LmNvbXBvbmVudFwiOyAvL1N0aWxsIG5lZWRzIHRvIGJlIHVzZWRcclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiOyBcclxuXHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjsgLy9Vc2VkIGZvciB0aGUgbG9naW4gZGlhbG9nXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInBvc3QtZGV0YWlsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wb3N0LWRldGFpbC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3N0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBvc3Q6IE9ic2VydmFibGU8UG9zdD47XHJcbiAgICBwb3N0czogQXJyYXk8UG9zdD4gXHJcbiAgICBjb21tZW50czogQXJyYXk8Q29tbWVudD4gPSBbXTtcclxuICAgIGRhdGE6IE9ic2VydmFibGU8QXJyYXk8UG9zdD4+O1xyXG4gICAgdGhlUG9zdDogUG9zdDtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBib2R5OiBzdHJpbmc7XHJcbiAgICBzbHVnOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY3VyRGF0ZSA9IHRoaXMuZ2V0RGF0ZSgpO1xyXG4gICAgcGhyYXNlPSBcIlwiO1xyXG5cclxuICAgIEBJbnB1dCgpIGNvbW1lbnQ6IENvbW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgYmxvZ1NlcnZpY2U6IEJsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlXHJcblxyXG4gICAgKVxyXG4gICAgey8vcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbHVnID0gcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSBwYXJhbXNbXCJpZFwiXTsgLy9kb24ndCBrbm93IHdoeSB0aGlzIGlzIG5lZWRlZCwgYnV0IGNhbid0IGZ1bmN0aW9uIHdpdGhvdXQgaXRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nZXRQb3N0SW5mbygpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbWVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1B1bGxzIHRoZSBjdXJyZW50IFBvc3QgaW5mbyB1c2luZyB0aGUgc2x1Zy5cclxuICAgIGdldFBvc3RJbmZvKCl7XHJcbiAgICAgICAgdGhpcy5ibG9nU2VydmljZS5nZXRQb3N0QnlTbHVnKHRoaXMuc2x1ZylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHsgXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9QdWxscyBhbGwgQ29tbWVudHMgZnJvbSB0aGUgYmxvZyBBUEkgYW5kIHN0b3JlcyBpdCBpbnRvIGEgY29tbWVudHMgYXJyYXk8Q29tbWVudD5cclxuICAgIGdldENvbW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0Q29tbWVudHModGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLmZvckVhY2goY29tbWVudD0+dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FkZHMgYSBDb21tZW50IG9iamVjdCB0byB0aGUgYmxvZyBBUEkgZnJvbSB1c2VyIGlucHV0XHJcbiAgICBhZGRDb21tZW50KCkge1xyXG4gICAgICAgIC8vQ2hlY2tzIHRvIG1ha2Ugc3VyZSBhIGNvbW1lbnQgd2VudCB0aHJvdWdoXHJcbiAgICAgICAgaWYgKCF0aGlzLnBocmFzZSkgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIHdhcyBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DcmVhdGVzIGEgbmV3IGNvbW1lbnQgYW5kIHBvc3RzIHVzaW5nIHRoZSB1c2VyJ3MgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgLy9DdXJyZW50bHkgaGFyZGNvZGVkOiBlbWFpbCBhbmQgbmFtZS4gR3VpZCBjYW4gc3RheSBzaW5jZSBpdCdzIG5vdCB1c2VkLlxyXG4gICAgICAgIC8vTmVlZHMgdG8gYmUgZmluaXNoZWQgYWZ0ZXIgbG9naW4gc2VjdGlvbiB3b3Jrcy5cclxuICAgICAgICAgICAgdGhpcy5jb21tZW50ID0gbmV3IENvbW1lbnQoXCIxMjM0NTY3OC05MTAwLXBvb3AtZ3VpZC1hbXZlcnltYXR1cmVcIiwgXCJhYmNAZ21haWwuY29tXCIsIHRoaXMucGhyYXNlLCBcIkpvaG5cIiwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UucG9zdENvbW1lbnQodGhpcy5jb21tZW50LCB0aGlzLnNsdWcpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnQgPT4ge3RoaXMuY29tbWVudHMucHVzaChjb21tZW50KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGNvbW1lbnQgaGFzIGJlZW4gcG9zdGVkIGJlbG93LlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb21tZW50KGl0ZW06IENvbW1lbnQpe1xyXG5cclxuICAgICAgICAvL0NoZWNrcyB0byBtYWtlIHN1cmUgYSBjb21tZW50IHdlbnQgdGhyb3VnaFxyXG4gICAgICAgIGlmICghaXRlbSkgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21tZW50IHdhcyBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vQ2FsbHMgQmxvZ1NlcnZpY2UgdG8gZGVsZXRlIHRoZSBjb21tZW50XHJcbiAgICAgICAgdGhpcy5ibG9nU2VydmljZS5kZWxldGVDb21tZW50KGl0ZW0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoY29tbWVudHM9PntcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzLmZvckVhY2goY29tbWVudD0+dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBhbGVydChcIllvdXIgY29tbWVudCB3YXMgZGVsZXRlZC4gUGxlYXNlIHJlZnJlc2guXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQmFjayBidXR0b24gdG8gcmV0dXJuIHRvIHByZXZpb3VzIHBhZ2UuXHJcbiAgICBwdWJsaWMgZ29CYWNrKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NoYXJlIGJ1dHRvbiB0byBzaGFyZSBhIGJsb2cgdGhyb3VnaCBzb2NpYWwgbWVkaWEuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIHNoYXJlKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBzaGFyZSBidXR0b24uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2F2ZXMgdGhlIGJsb2cgcG9zdCB0byB0aGUgdXNlcidzIGJvb2ttYXJrcy5cclxuICAgIC8vTmVlZHMgdG8gYmUgZmluaXNoZWQuXHJcbiAgICBwdWJsaWMgYm9va21hcmsoKXtcclxuICAgICAgICBhbGVydChcIllvdSBoYXZlIHByZXNzZWQgdGhlIGJvb2ttYXJrIGJ1dHRvbi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERhdGUoKXtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIG1vbnRocyA9IG5ldyBBcnJheShcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFxyXG4gICAgICAgICAgICBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXHJcbiAgICAgICAgICAgIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBkLmdldERhdGUoKSArIFwiIFwiICsgbW9udGhzW2QuZ2V0TW9udGgoKV07XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICBkaWFsb2dzLmxvZ2luKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgbG9naW4gdXNpbmcgeW91ciBlbWFpbCBhbmQgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIlNpZ24gVXBcIixcclxuICAgICAgICAgICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgICAgfSkudGhlbihyPT4ge1xyXG4gICAgICAgICAgICBpZihyLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCB3YXMgdHJ1ZSBvciBMb2dpbiBidXR0b25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihyLnJlc3VsdCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgd2FzIHVuZGVmaW5lZCBvciBSZWdpc3RlciBidXR0b25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXIucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IHdhcyBmYWxzZSBvciBDYW5jZWwgYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=
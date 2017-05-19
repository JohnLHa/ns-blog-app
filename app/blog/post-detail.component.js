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
        this.pageRoute = pageRoute;
        this.comments = [];
        this.curDate = new Date();
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
        //Needs to be finished.
        this.comment = new comment_1.Comment("12345678-9100-poop-guid-amverymature", "abc@gmail.com", this.phrase, "John", new Date());
        this.blogService.postComment(this.comment, this.slug)
            .subscribe(function (comment) {
            _this.comments.push(comment);
        });
        alert("Your comment was posted. Refresh the page to see the changes.");
    };
    PostDetailComponent.prototype.deleteComment = function (item) {
        var _this = this;
        console.log(item.id);
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
        alert("Your comment was deleted. Refresh the page to see the changes.");
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
    return PostDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", comment_1.Comment)
], PostDetailComponent.prototype, "comment", void 0);
PostDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./post-detail.component.html",
        styleUrls: ["./post-detail.css"],
        providers: [blog_service_1.BlogService, comment_component_1.CommentComponent]
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        blog_service_1.BlogService,
        router_1.ActivatedRoute,
        page_1.Page,
        comment_component_1.CommentComponent,
        router_3.PageRoute])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQUM5RCxxQ0FBb0M7QUFFcEMseURBQXVEO0FBQ3ZELHNEQUF3RDtBQVV4RCxJQUFhLG1CQUFtQjtJQWU1Qiw2QkFDWSxnQkFBa0MsRUFDbEMsV0FBd0IsRUFDeEIsS0FBcUIsRUFDN0IsSUFBVSxFQUNWLGdCQUFrQyxFQUMxQixTQUFvQjtRQU5oQyxpQkFpQkM7UUFoQlcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUdyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBbEJoQyxhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQU85QixZQUFPLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQUUsRUFBRSxDQUFDO1FBY1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsOERBQThEO1FBQ2hHLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFF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QS9GWTtJQUFSLFlBQUssRUFBRTs4QkFBVSxpQkFBTztvREFBQztBQWJqQixtQkFBbUI7SUFSL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsb0NBQWdCLENBQUM7S0FDN0MsQ0FBQztxQ0FrQmdDLHlCQUFnQjtRQUNyQiwwQkFBVztRQUNqQix1QkFBYztRQUN2QixXQUFJO1FBQ1Esb0NBQWdCO1FBQ2Ysa0JBQVM7R0FyQnZCLG1CQUFtQixDQTRHL0I7QUE1R1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gXCIuL2Jsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCI7XHJcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSBcInVpL3RleHQtdmlld1wiO1xyXG5pbXBvcnQgeyBDb21tZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tbWVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Bvc3QtZGV0YWlsLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0Jsb2dTZXJ2aWNlLCBDb21tZW50Q29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3REZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcG9zdDogT2JzZXJ2YWJsZTxQb3N0PjtcclxuICAgIHBvc3RzOiBBcnJheTxQb3N0PiBcclxuICAgIGNvbW1lbnRzOiBBcnJheTxDb21tZW50PiA9IFtdO1xyXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxBcnJheTxQb3N0Pj47XHJcbiAgICB0aGVQb3N0OiBQb3N0O1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGJvZHk6IHN0cmluZztcclxuICAgIHNsdWc6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBjdXJEYXRlPSBuZXcgRGF0ZSgpO1xyXG4gICAgcGhyYXNlPSBcIlwiO1xyXG5cclxuICAgIEBJbnB1dCgpIGNvbW1lbnQ6IENvbW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgYmxvZ1NlcnZpY2U6IEJsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgY29tbWVudENvbXBvbmVudDogQ29tbWVudENvbXBvbmVudCxcclxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlXHJcblxyXG4gICAgKVxyXG4gICAgey8vcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbHVnID0gcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSBwYXJhbXNbXCJpZFwiXTsgLy9kb24ndCBrbm93IHdoeSB0aGlzIGlzIG5lZWRlZCwgYnV0IGNhbid0IGZ1bmN0aW9uIHdpdGhvdXQgaXRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRQb3N0SW5mbygpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbWVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1B1bGxzIHRoZSBjdXJyZW50IFBvc3QgaW5mbyB1c2luZyB0aGUgc2x1Zy5cclxuICAgIGdldFBvc3RJbmZvKCl7XHJcbiAgICAgICAgdGhpcy5ibG9nU2VydmljZS5nZXRQb3N0QnlTbHVnKHRoaXMuc2x1ZylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSh4ID0+IHsgXHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9QdWxscyBhbGwgQ29tbWVudHMgZnJvbSB0aGUgYmxvZyBBUEkgYW5kIHN0b3JlcyBpdCBpbnRvIGEgY29tbWVudHMgYXJyYXk8Q29tbWVudD5cclxuICAgIGdldENvbW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0Q29tbWVudHModGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLmZvckVhY2goY29tbWVudD0+dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FkZHMgYSBDb21tZW50IG9iamVjdCB0byB0aGUgYmxvZyBBUEkgZnJvbSB1c2VyIGlucHV0XHJcbiAgICBhZGRDb21tZW50KCkge1xyXG4gICAgICAgIC8vQ2hlY2tzIHRvIG1ha2Ugc3VyZSBhIGNvbW1lbnQgd2VudCB0aHJvdWdoXHJcbiAgICAgICAgaWYgKCF0aGlzLnBocmFzZSkgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNZXNzYWdlIHdhcyBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9DcmVhdGVzIGEgbmV3IGNvbW1lbnQgYW5kIHBvc3RzIHVzaW5nIHRoZSB1c2VyJ3MgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgLy9DdXJyZW50bHkgaGFyZGNvZGVkOiBlbWFpbCBhbmQgbmFtZS4gR3VpZCBjYW4gc3RheSBzaW5jZSBpdCdzIG5vdCB1c2VkLlxyXG4gICAgICAgIC8vTmVlZHMgdG8gYmUgZmluaXNoZWQuXHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IG5ldyBDb21tZW50KFwiMTIzNDU2NzgtOTEwMC1wb29wLWd1aWQtYW12ZXJ5bWF0dXJlXCIsIFwiYWJjQGdtYWlsLmNvbVwiLCB0aGlzLnBocmFzZSwgXCJKb2huXCIsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLnBvc3RDb21tZW50KHRoaXMuY29tbWVudCwgdGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50ID0+IHt0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBjb21tZW50IHdhcyBwb3N0ZWQuIFJlZnJlc2ggdGhlIHBhZ2UgdG8gc2VlIHRoZSBjaGFuZ2VzLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb21tZW50KGl0ZW06IENvbW1lbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQpO1xyXG5cclxuICAgICAgICAvL0NoZWNrcyB0byBtYWtlIHN1cmUgYSBjb21tZW50IHdlbnQgdGhyb3VnaFxyXG4gICAgICAgIGlmICghaXRlbSkgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21tZW50IHdhcyBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIC8vQ2FsbHMgQmxvZ1NlcnZpY2UgdG8gZGVsZXRlIHRoZSBjb21tZW50XHJcbiAgICAgICAgdGhpcy5ibG9nU2VydmljZS5kZWxldGVDb21tZW50KGl0ZW0uaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoY29tbWVudHM9PntcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzLmZvckVhY2goY29tbWVudD0+dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBhbGVydChcIllvdXIgY29tbWVudCB3YXMgZGVsZXRlZC4gUmVmcmVzaCB0aGUgcGFnZSB0byBzZWUgdGhlIGNoYW5nZXMuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQmFjayBidXR0b24gdG8gcmV0dXJuIHRvIHByZXZpb3VzIHBhZ2UuXHJcbiAgICBwdWJsaWMgZ29CYWNrKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NoYXJlIGJ1dHRvbiB0byBzaGFyZSBhIGJsb2cgdGhyb3VnaCBzb2NpYWwgbWVkaWEuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIHNoYXJlKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBzaGFyZSBidXR0b24uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2F2ZXMgdGhlIGJsb2cgcG9zdCB0byB0aGUgdXNlcidzIGJvb2ttYXJrcy5cclxuICAgIC8vTmVlZHMgdG8gYmUgZmluaXNoZWQuXHJcbiAgICBwdWJsaWMgYm9va21hcmsoKXtcclxuICAgICAgICBhbGVydChcIllvdSBoYXZlIHByZXNzZWQgdGhlIGJvb2ttYXJrIGJ1dHRvbi5cIik7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==
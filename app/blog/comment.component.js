"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var blog_service_1 = require("./blog.service");
var comment_1 = require("./comment");
var CommentComponent = (function () {
    function CommentComponent(blogService) {
        this.blogService = blogService;
        this.mode = 'Observable';
    }
    CommentComponent.prototype.ngOnInit = function () { this.getComments(); };
    //Pulls the current Post info using the slug.
    CommentComponent.prototype.getPostInfo = function () {
        var _this = this;
        this.blogService.getPostBySlug(this.slug)
            .subscribe(function (x) {
            JSON.stringify(x);
            _this.post = x;
        });
    };
    //Pulls all Comments from the blog API and stores it into a comments array<Comment>
    CommentComponent.prototype.getComments = function () {
        var _this = this;
        this.blogService.getComments(this.slug)
            .subscribe(function (comments) {
            comments.forEach(function (comment) { return _this.comments.push(comment); });
        });
    };
    //Adds a Comment object to the blog API from user input
    CommentComponent.prototype.addComment = function () {
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
        alert("Your comment was posted. Pull up to refresh.");
    };
    CommentComponent.prototype.deleteComment = function (item) {
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
        alert("Your comment was deleted. Pull up to refresh.");
    };
    return CommentComponent;
}());
CommentComponent = __decorate([
    core_1.Component({
        selector: "comment-section",
        moduleId: module.id,
        templateUrl: "./post-detail.component.html",
        providers: [blog_service_1.BlogService]
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUlsRCwrQ0FBNkM7QUFFN0MscUNBQW9DO0FBVXBDLElBQWEsZ0JBQWdCO0lBUzNCLDBCQUFxQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUw3QyxTQUFJLEdBQUcsWUFBWSxDQUFDO0lBSzRCLENBQUM7SUFFakQsbUNBQVEsR0FBUixjQUFhLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFcEMsNkNBQTZDO0lBQ3pDLHNDQUFXLEdBQVg7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDcEMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUZBQW1GO0lBQ25GLHNDQUFXLEdBQVg7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNuQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFFLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQscUNBQVUsR0FBVjtRQUFBLGlCQWVDO1FBZEcsNENBQTRDO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELCtEQUErRDtRQUMvRCx5RUFBeUU7UUFDekUsaURBQWlEO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLHNDQUFzQyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hELFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFBSyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCx3Q0FBYSxHQUFiLFVBQWMsSUFBYTtRQUEzQixpQkFlQztRQWRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXJCLDRDQUE0QztRQUM1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1FBQ1gsQ0FBQztRQUVELHlDQUF5QztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDZixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFFLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNQLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFoRUQsSUFnRUM7QUFoRVksZ0JBQWdCO0lBUDVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FXa0MsMEJBQVc7R0FUbEMsZ0JBQWdCLENBZ0U1QjtBQWhFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gXCIuL2Jsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29tbWVudC1zZWN0aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbQmxvZ1NlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgY29tbWVudDogQ29tbWVudDtcclxuICBjb21tZW50czogQ29tbWVudFtdO1xyXG4gIG1vZGUgPSAnT2JzZXJ2YWJsZSc7XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG4gIHBvc3Q6IFBvc3Q7XHJcbiAgcGhyYXNlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGJsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7IHRoaXMuZ2V0Q29tbWVudHMoKTsgfVxyXG5cclxuLy9QdWxscyB0aGUgY3VycmVudCBQb3N0IGluZm8gdXNpbmcgdGhlIHNsdWcuXHJcbiAgICBnZXRQb3N0SW5mbygpe1xyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0UG9zdEJ5U2x1Zyh0aGlzLnNsdWcpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoeCA9PiB7IFxyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSB4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUHVsbHMgYWxsIENvbW1lbnRzIGZyb20gdGhlIGJsb2cgQVBJIGFuZCBzdG9yZXMgaXQgaW50byBhIGNvbW1lbnRzIGFycmF5PENvbW1lbnQ+XHJcbiAgICBnZXRDb21tZW50cygpIHtcclxuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLmdldENvbW1lbnRzKHRoaXMuc2x1ZylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50cz0+e1xyXG4gICAgICAgICAgICBjb21tZW50cy5mb3JFYWNoKGNvbW1lbnQ9PnRoaXMuY29tbWVudHMucHVzaChjb21tZW50KSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9BZGRzIGEgQ29tbWVudCBvYmplY3QgdG8gdGhlIGJsb2cgQVBJIGZyb20gdXNlciBpbnB1dFxyXG4gICAgYWRkQ29tbWVudCgpIHtcclxuICAgICAgICAvL0NoZWNrcyB0byBtYWtlIHN1cmUgYSBjb21tZW50IHdlbnQgdGhyb3VnaFxyXG4gICAgICAgIGlmICghdGhpcy5waHJhc2UpIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSB3YXMgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ3JlYXRlcyBhIG5ldyBjb21tZW50IGFuZCBwb3N0cyB1c2luZyB0aGUgdXNlcidzIGluZm9ybWF0aW9uLlxyXG4gICAgICAgIC8vQ3VycmVudGx5IGhhcmRjb2RlZDogZW1haWwgYW5kIG5hbWUuIEd1aWQgY2FuIHN0YXkgc2luY2UgaXQncyBub3QgdXNlZC5cclxuICAgICAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkIGFmdGVyIGxvZ2luIHNlY3Rpb24gd29ya3MuXHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IG5ldyBDb21tZW50KFwiMTIzNDU2NzgtOTEwMC1wb29wLWd1aWQtYW12ZXJ5bWF0dXJlXCIsIFwiYWJjQGdtYWlsLmNvbVwiLCB0aGlzLnBocmFzZSwgXCJKb2huXCIsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLnBvc3RDb21tZW50KHRoaXMuY29tbWVudCwgdGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50ID0+IHt0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBjb21tZW50IHdhcyBwb3N0ZWQuIFB1bGwgdXAgdG8gcmVmcmVzaC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQ29tbWVudChpdGVtOiBDb21tZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmlkKTtcclxuXHJcbiAgICAgICAgLy9DaGVja3MgdG8gbWFrZSBzdXJlIGEgY29tbWVudCB3ZW50IHRocm91Z2hcclxuICAgICAgICBpZiAoIWl0ZW0pIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCB3YXMgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAvL0NhbGxzIEJsb2dTZXJ2aWNlIHRvIGRlbGV0ZSB0aGUgY29tbWVudFxyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZGVsZXRlQ29tbWVudChpdGVtLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cy5mb3JFYWNoKGNvbW1lbnQ9PnRoaXMuY29tbWVudHMucHVzaChjb21tZW50KSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgYWxlcnQoXCJZb3VyIGNvbW1lbnQgd2FzIGRlbGV0ZWQuIFB1bGwgdXAgdG8gcmVmcmVzaC5cIik7XHJcbiAgICB9XHJcbn0iXX0=
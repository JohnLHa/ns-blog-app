"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var blog_service_1 = require("./blog.service");
var comment_1 = require("./comment");
var post_detail_component_1 = require("./post-detail.component");
var dialogs = require("ui/dialogs"); //Used for the login dialog
var CommentComponent = (function () {
    function CommentComponent(blogService, pageRoute) {
        var _this = this;
        this.blogService = blogService;
        this.pageRoute = pageRoute;
        this.comments = [];
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.slug = params["id"];
            _this.post = params["id"]; //don't know why this is needed, but can't function without it
        });
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.getComments();
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
    CommentComponent.prototype.login = function () {
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
    return CommentComponent;
}());
CommentComponent = __decorate([
    core_1.Component({
        selector: "comment-section",
        moduleId: module.id,
        templateUrl: "./comment.html",
        styleUrls: ["./post-detail.css"],
        providers: [blog_service_1.BlogService, post_detail_component_1.PostDetailComponent]
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService,
        router_1.PageRoute])
], CommentComponent);
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUlsRCxzREFBd0Q7QUFDeEQsK0NBQTZDO0FBRTdDLHFDQUFvQztBQUVwQyxpRUFBOEQ7QUFDOUQsb0NBQXNDLENBQUMsMkJBQTJCO0FBVWxFLElBQWEsZ0JBQWdCO0lBT3pCLDBCQUNZLFdBQXdCLEVBQ3hCLFNBQW9CO1FBRmhDLGlCQVdDO1FBVlcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVBsQyxhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQVV4QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQzthQUNsRCxPQUFPLENBQUMsVUFBQyxNQUFNO1lBQ1osS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyw4REFBOEQ7UUFDaEcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRUQsbUZBQW1GO0lBQ25GLHNDQUFXLEdBQVg7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNuQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFFLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FB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RUFBRSxDQUFDLDBCQUFXLEVBQUUsMkNBQW1CLENBQUM7S0FDaEQsQ0FBQztxQ0FVMkIsMEJBQVc7UUFDYixrQkFBUztHQVR2QixnQkFBZ0IsQ0EyRjVCO0FBM0ZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiOyBcclxuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9ibG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi4vY29tbWVudFwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiXHJcbmltcG9ydCB7IFBvc3REZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9wb3N0LWRldGFpbC5jb21wb25lbnRcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiOyAvL1VzZWQgZm9yIHRoZSBsb2dpbiBkaWFsb2dcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29tbWVudC1zZWN0aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21tZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wb3N0LWRldGFpbC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nU2VydmljZSwgUG9zdERldGFpbENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb21tZW50OiBDb21tZW50O1xyXG4gIGNvbW1lbnRzOiBBcnJheTxDb21tZW50PiA9IFtdO1xyXG4gIHNsdWc6IHN0cmluZztcclxuICBwb3N0OiBQb3N0O1xyXG4gIHBocmFzZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBwcml2YXRlIGJsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlXHJcbiAgICApIFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoYWN0aXZhdGVkUm91dGUgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgocGFyYW1zKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbHVnID0gcGFyYW1zW1wiaWRcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSBwYXJhbXNbXCJpZFwiXTsgLy9kb24ndCBrbm93IHdoeSB0aGlzIGlzIG5lZWRlZCwgYnV0IGNhbid0IGZ1bmN0aW9uIHdpdGhvdXQgaXRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgXHJcbiAgICAgICAgdGhpcy5nZXRDb21tZW50cygpOyBcclxuICAgICAgICBcclxuICAgIH0gICBcclxuXHJcbiAgICAvL1B1bGxzIGFsbCBDb21tZW50cyBmcm9tIHRoZSBibG9nIEFQSSBhbmQgc3RvcmVzIGl0IGludG8gYSBjb21tZW50cyBhcnJheTxDb21tZW50PlxyXG4gICAgZ2V0Q29tbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5ibG9nU2VydmljZS5nZXRDb21tZW50cyh0aGlzLnNsdWcpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoY29tbWVudHM9PntcclxuICAgICAgICAgICAgY29tbWVudHMuZm9yRWFjaChjb21tZW50PT50aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgLy9BZGRzIGEgQ29tbWVudCBvYmplY3QgdG8gdGhlIGJsb2cgQVBJIGZyb20gdXNlciBpbnB1dFxyXG4gICAgYWRkQ29tbWVudCgpIHtcclxuICAgICAgICAvL0NoZWNrcyB0byBtYWtlIHN1cmUgYSBjb21tZW50IHdlbnQgdGhyb3VnaFxyXG4gICAgICAgIGlmICghdGhpcy5waHJhc2UpIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSB3YXMgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ3JlYXRlcyBhIG5ldyBjb21tZW50IGFuZCBwb3N0cyB1c2luZyB0aGUgdXNlcidzIGluZm9ybWF0aW9uLlxyXG4gICAgICAgIC8vQ3VycmVudGx5IGhhcmRjb2RlZDogZW1haWwgYW5kIG5hbWUuIEd1aWQgY2FuIHN0YXkgc2luY2UgaXQncyBub3QgdXNlZC5cclxuICAgICAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkIGFmdGVyIGxvZ2luIHNlY3Rpb24gd29ya3MuXHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudCA9IG5ldyBDb21tZW50KFwiMTIzNDU2NzgtOTEwMC1wb29wLWd1aWQtYW12ZXJ5bWF0dXJlXCIsIFwiYWJjQGdtYWlsLmNvbVwiLCB0aGlzLnBocmFzZSwgXCJKb2huXCIsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLnBvc3RDb21tZW50KHRoaXMuY29tbWVudCwgdGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50ID0+IHt0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhbGVydChcIllvdXIgY29tbWVudCB3YXMgcG9zdGVkLiBQdWxsIHVwIHRvIHJlZnJlc2guXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNvbW1lbnQoaXRlbTogQ29tbWVudCl7XHJcbiAgICAgICAgLy9DaGVja3MgdG8gbWFrZSBzdXJlIGEgY29tbWVudCB3ZW50IHRocm91Z2hcclxuICAgICAgICBpZiAoIWl0ZW0pIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCB3YXMgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICAvL0NhbGxzIEJsb2dTZXJ2aWNlIHRvIGRlbGV0ZSB0aGUgY29tbWVudFxyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZGVsZXRlQ29tbWVudChpdGVtLmlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cy5mb3JFYWNoKGNvbW1lbnQ9PnRoaXMuY29tbWVudHMucHVzaChjb21tZW50KSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgYWxlcnQoXCJZb3VyIGNvbW1lbnQgd2FzIGRlbGV0ZWQuIFB1bGwgdXAgdG8gcmVmcmVzaC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICBkaWFsb2dzLmxvZ2luKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgbG9naW4gdXNpbmcgeW91ciBlbWFpbCBhbmQgcGFzc3dvcmRcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBcIlNpZ24gVXBcIixcclxuICAgICAgICAgICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgICAgfSkudGhlbihyPT4ge1xyXG4gICAgICAgICAgICBpZihyLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCB3YXMgdHJ1ZSBvciBMb2dpbiBidXR0b25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihyLnJlc3VsdCA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgd2FzIHVuZGVmaW5lZCBvciBSZWdpc3RlciBidXR0b25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXIucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IHdhcyBmYWxzZSBvciBDYW5jZWwgYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSJdfQ==
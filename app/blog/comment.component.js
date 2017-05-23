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
        this.isLoading = false;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) {
            _this.slug = params["id"];
            _this.post = params["id"]; //don't know why this is needed, but can't function without it
        });
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.getPostInfo();
        this.getComments();
    };
    //Pulls all Comments from the blog API and stores it into a comments array<Comment>
    CommentComponent.prototype.getComments = function () {
        var _this = this;
        this.blogService.getComments(this.slug)
            .subscribe(function (comments) {
            comments.forEach(function (comment) { return _this.comments.push(comment); });
        });
        for (var i in this.comments) {
            console.log(this.comments[i].name);
        }
        this.isLoading = false;
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
        this.comment = new comment_1.Comment("12345678-9100-poop-guid-amverymature", "abc@gmail.com", "John", this.phrase, new Date());
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
    //Gets post details. Needed for retaining modularity in adding and deleting comments
    CommentComponent.prototype.getPostInfo = function () {
        var _this = this;
        this.blogService.getPostBySlug(this.slug)
            .subscribe(function (x) {
            JSON.stringify(x);
            _this.post = x;
        });
    };
    //Will be replaced with auth0 later.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUlsRCxzREFBd0Q7QUFDeEQsK0NBQTZDO0FBRTdDLHFDQUFvQztBQUVwQyxpRUFBOEQ7QUFDOUQsb0NBQXNDLENBQUMsMkJBQTJCO0FBVWxFLElBQWEsZ0JBQWdCO0lBUXpCLDBCQUNZLFdBQXdCLEVBQ3hCLFNBQW9CO1FBRmhDLGlCQVdDO1FBVlcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVJsQyxhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUk5QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjO2FBQ3hCLFNBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUM7YUFDbEQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsOERBQThEO1FBQ2hHLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRXZCLENBQUM7SUFFRCxtRkFBbUY7SUFDbkYsc0NBQVcsR0FBWDtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ25CLFFBQVEsQ0FB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QUFBLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDM0QsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQTNHRCxJQTJHQztBQTNHWSxnQkFBZ0I7SUFSNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDaEMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSwyQ0FBbUIsQ0FBQztLQUNoRCxDQUFDO3FDQVcyQiwwQkFBVztRQUNiLGtCQUFTO0dBVnZCLGdCQUFnQixDQTJHNUI7QUEzR1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7IFxyXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gXCIuL2Jsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCJcclxuaW1wb3J0IHsgUG9zdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3Bvc3QtZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7IC8vVXNlZCBmb3IgdGhlIGxvZ2luIGRpYWxvZ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21tZW50LXNlY3Rpb25cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbW1lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Bvc3QtZGV0YWlsLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0Jsb2dTZXJ2aWNlLCBQb3N0RGV0YWlsQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbW1lbnQ6IENvbW1lbnQ7XHJcbiAgY29tbWVudHM6IEFycmF5PENvbW1lbnQ+ID0gW107XHJcbiAgc2x1Zzogc3RyaW5nO1xyXG4gIHBvc3Q6IFBvc3Q7XHJcbiAgcGhyYXNlOiBzdHJpbmc7XHJcbiAgaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIHByaXZhdGUgYmxvZ1NlcnZpY2U6IEJsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGVcclxuICAgICkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsdWcgPSBwYXJhbXNbXCJpZFwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdCA9IHBhcmFtc1tcImlkXCJdOyAvL2Rvbid0IGtub3cgd2h5IHRoaXMgaXMgbmVlZGVkLCBidXQgY2FuJ3QgZnVuY3Rpb24gd2l0aG91dCBpdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyBcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZXRQb3N0SW5mbygpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29tbWVudHMoKTsgXHJcbiAgICAgICAgXHJcbiAgICB9ICAgXHJcblxyXG4gICAgLy9QdWxscyBhbGwgQ29tbWVudHMgZnJvbSB0aGUgYmxvZyBBUEkgYW5kIHN0b3JlcyBpdCBpbnRvIGEgY29tbWVudHMgYXJyYXk8Q29tbWVudD5cclxuICAgIGdldENvbW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0Q29tbWVudHModGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLmZvckVhY2goY29tbWVudD0+dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLmNvbW1lbnRzKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb21tZW50c1tpXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIC8vQWRkcyBhIENvbW1lbnQgb2JqZWN0IHRvIHRoZSBibG9nIEFQSSBmcm9tIHVzZXIgaW5wdXRcclxuICAgIGFkZENvbW1lbnQoKSB7XHJcbiAgICAgICAgLy9DaGVja3MgdG8gbWFrZSBzdXJlIGEgY29tbWVudCB3ZW50IHRocm91Z2hcclxuICAgICAgICBpZiAoIXRoaXMucGhyYXNlKSB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2Ugd2FzIG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0NyZWF0ZXMgYSBuZXcgY29tbWVudCBhbmQgcG9zdHMgdXNpbmcgdGhlIHVzZXIncyBpbmZvcm1hdGlvbi5cclxuICAgICAgICAvL0N1cnJlbnRseSBoYXJkY29kZWQ6IGVtYWlsIGFuZCBuYW1lLiBHdWlkIGNhbiBzdGF5IHNpbmNlIGl0J3Mgbm90IHVzZWQuXHJcbiAgICAgICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZCBhZnRlciBsb2dpbiBzZWN0aW9uIHdvcmtzLlxyXG4gICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSBuZXcgQ29tbWVudChcIjEyMzQ1Njc4LTkxMDAtcG9vcC1ndWlkLWFtdmVyeW1hdHVyZVwiLCBcImFiY0BnbWFpbC5jb21cIiwgXCJKb2huXCIsIHRoaXMucGhyYXNlLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5ibG9nU2VydmljZS5wb3N0Q29tbWVudCh0aGlzLmNvbW1lbnQsIHRoaXMuc2x1ZylcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoY29tbWVudCA9PiB7dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGNvbW1lbnQgd2FzIHBvc3RlZC4gUHVsbCB1cCB0byByZWZyZXNoLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb21tZW50KGl0ZW06IENvbW1lbnQpe1xyXG4gICAgICAgIC8vQ2hlY2tzIHRvIG1ha2Ugc3VyZSBhIGNvbW1lbnQgd2VudCB0aHJvdWdoXHJcbiAgICAgICAgaWYgKCFpdGVtKSB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnQgd2FzIG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy9DYWxscyBCbG9nU2VydmljZSB0byBkZWxldGUgdGhlIGNvbW1lbnRcclxuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLmRlbGV0ZUNvbW1lbnQoaXRlbS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50cz0+e1xyXG4gICAgICAgICAgICAgICAgY29tbWVudHMuZm9yRWFjaChjb21tZW50PT50aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGFsZXJ0KFwiWW91ciBjb21tZW50IHdhcyBkZWxldGVkLiBQdWxsIHVwIHRvIHJlZnJlc2guXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0cyBwb3N0IGRldGFpbHMuIE5lZWRlZCBmb3IgcmV0YWluaW5nIG1vZHVsYXJpdHkgaW4gYWRkaW5nIGFuZCBkZWxldGluZyBjb21tZW50c1xyXG4gICAgZ2V0UG9zdEluZm8oKXtcclxuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLmdldFBvc3RCeVNsdWcodGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHggPT4geyBcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0ID0geDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1dpbGwgYmUgcmVwbGFjZWQgd2l0aCBhdXRoMCBsYXRlci5cclxuICAgIGxvZ2luKCl7XHJcbiAgICAgICAgZGlhbG9ncy5sb2dpbih7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGxvZ2luIHVzaW5nIHlvdXIgZW1haWwgYW5kIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJMb2dpblwiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICBuZXV0cmFsQnV0dG9uVGV4dDogXCJTaWduIFVwXCIsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgIH0pLnRoZW4ocj0+IHtcclxuICAgICAgICAgICAgaWYoci5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgd2FzIHRydWUgb3IgTG9naW4gYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoci5yZXN1bHQgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IHdhcyB1bmRlZmluZWQgb3IgUmVnaXN0ZXIgYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFyLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdCB3YXMgZmFsc2Ugb3IgQ2FuY2VsIGJ1dHRvblwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iXX0=
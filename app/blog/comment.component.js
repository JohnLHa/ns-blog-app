"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var blog_service_1 = require("./blog.service");
var CommentComponent = (function () {
    function CommentComponent(blogService) {
        this.blogService = blogService;
        this.mode = 'Observable';
    }
    CommentComponent.prototype.ngOnInit = function () { this.getComments(); };
    CommentComponent.prototype.getComments = function () {
        /*this.blogService.getComments(this.slug)
            .subscribe(
                comments => this.comments = comments,
                error =>  this.errorMessage = <any>error);*/
        var _this = this;
        this.blogService.getComments(this.slug).subscribe(function (comments) {
            comments.forEach(function (comment) { return _this.comments.push(comment); });
        });
    };
    CommentComponent.prototype.addComment = function (phrase) {
        var _this = this;
        if (!phrase) {
            return;
        }
        this.blogService.postComment(phrase, this.slug)
            .subscribe(function (comment) { return _this.comments.push(comment); }, function (error) { return _this.errorMessage = error; });
    };
    CommentComponent.prototype.testAdd = function () {
        console.log(" Message received.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUlsRCwrQ0FBNkM7QUFXN0MsSUFBYSxnQkFBZ0I7SUFPM0IsMEJBQXFCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDdDLFNBQUksR0FBRyxZQUFZLENBQUM7SUFHNEIsQ0FBQztJQUVqRCxtQ0FBUSxHQUFSLGNBQWEsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVsQyxzQ0FBVyxHQUFYO1FBQ0U7Ozs0REFHb0Q7UUFKdEQsaUJBU0M7UUFIQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUN0RCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFFLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtRQUN0RCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFDRCxxQ0FBVSxHQUFWLFVBQVcsTUFBZTtRQUExQixpQkFNQztRQUxDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUNSLFVBQUEsT0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLEVBQ3ZDLFVBQUEsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsa0NBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLGdCQUFnQjtJQVA1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBU2tDLDBCQUFXO0dBUGxDLGdCQUFnQixDQWdDNUI7QUFoQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9ibG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi4vY29tbWVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21tZW50LXNlY3Rpb25cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBjb21tZW50OiBzdHJpbmc7XHJcbiAgY29tbWVudHM6IENvbW1lbnRbXTtcclxuICBtb2RlID0gJ09ic2VydmFibGUnO1xyXG4gIHNsdWc6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IgKHByaXZhdGUgYmxvZ1NlcnZpY2U6IEJsb2dTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHsgdGhpcy5nZXRDb21tZW50cygpOyB9XHJcblxyXG4gIGdldENvbW1lbnRzKCkge1xyXG4gICAgLyp0aGlzLmJsb2dTZXJ2aWNlLmdldENvbW1lbnRzKHRoaXMuc2x1ZylcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBjb21tZW50cyA9PiB0aGlzLmNvbW1lbnRzID0gY29tbWVudHMsXHJcbiAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpOyovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB0aGlzLmJsb2dTZXJ2aWNlLmdldENvbW1lbnRzKHRoaXMuc2x1Zykuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChjb21tZW50PT50aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCkpXHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG4gIGFkZENvbW1lbnQocGhyYXNlOiBDb21tZW50KSB7XHJcbiAgICBpZiAoIXBocmFzZSkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuYmxvZ1NlcnZpY2UucG9zdENvbW1lbnQocGhyYXNlLCB0aGlzLnNsdWcpXHJcbiAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudCAgPT4gdGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+ICB0aGlzLmVycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgdGVzdEFkZCgpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIiBNZXNzYWdlIHJlY2VpdmVkLlwiKTtcclxuICB9XHJcbn0iXX0=
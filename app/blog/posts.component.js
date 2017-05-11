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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE0QztBQVM1QyxJQUFhLGNBQWM7SUFHdkIsd0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFFaUIsQ0FBQztJQUUxQyxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzlCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FJNEIsMEJBQVc7R0FINUIsY0FBYyxDQVcxQjtBQVhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiXHJcblxyXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gXCIuL2Jsb2cuc2VydmljZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImJsb2ctcG9zdHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3RzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcG9zdF9jb21wLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0Jsb2dTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcG9zdHM6IEFycmF5PFBvc3Q+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBCbG9nU2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvc3RzKCkuc3Vic2NyaWJlKHBvc3RzPT57XHJcbiAgICAgICAgICAgIHBvc3RzLmZvckVhY2gocG9zdD0+dGhpcy5wb3N0cy5wdXNoKHBvc3QpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
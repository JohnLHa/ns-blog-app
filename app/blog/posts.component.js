"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var blog_service_1 = require("./blog.service");
var PostsComponent = (function () {
    function PostsComponent(data) {
        this.data = data;
        this.posts = [];
    }
    //On Init pulls and saves Posts into a post array<Post>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBTy9GLCtDQUE2QztBQVc3QyxJQUFhLGNBQWM7SUFJdkIsd0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFIckMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFHaUIsQ0FBQztJQUUxQyx1REFBdUQ7SUFDdkQsaUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUM5QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBSzRCLDBCQUFXO0dBSjVCLGNBQWMsQ0FZMUI7QUFaWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIlxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNpZGVEcmF3ZXJHZXR0aW5nU3RhcnRlZENvbXBvbmVudCB9IGZyb20gXCIuL2RyYXdlci5jb21wb25lbnRcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImJsb2ctcG9zdHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3RzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcG9zdF9jb21wLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0Jsb2dTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcG9zdHM6IEFycmF5PFBvc3Q+ID0gW107XHJcbiAgICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhOiBCbG9nU2VydmljZSkgeyB9XHJcblxyXG4gICAgLy9PbiBJbml0IHB1bGxzIGFuZCBzYXZlcyBQb3N0cyBpbnRvIGEgcG9zdCBhcnJheTxQb3N0PlxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBvc3RzKCkuc3Vic2NyaWJlKHBvc3RzPT57XHJcbiAgICAgICAgICAgIHBvc3RzLmZvckVhY2gocG9zdD0+dGhpcy5wb3N0cy5wdXNoKHBvc3QpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
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
    //Allows the user to search for a certain blog post.
    //Needs to be finished.
    PostsComponent.prototype.search = function () {
        alert("You have clicked the search button.");
    };
    //Allows the user to access the navigation drawer.
    //Needs to be finished.
    PostsComponent.prototype.badDrawer = function () {
        alert("You have clicked on the broken, navDrawer button.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBTy9GLCtDQUE0QztBQVU1QyxJQUFhLGNBQWM7SUFJdkIsd0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFIckMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFHaUIsQ0FBQztJQUUxQyx1REFBdUQ7SUFDdkQsaUNBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9EQUFvRDtJQUNwRCx1QkFBdUI7SUFDaEIsK0JBQU0sR0FBYjtRQUNJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsdUJBQXVCO0lBQ2hCLGtDQUFTLEdBQWhCO1FBQ0ksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUM5QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBSzRCLDBCQUFXO0dBSjVCLGNBQWMsQ0F5QjFCO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9ibG9nLnNlcnZpY2VcIlxyXG5pbXBvcnQgeyBTaWRlRHJhd2VyR2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQgfSBmcm9tIFwiLi9kcmF3ZXIuY29tcG9uZW50XCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYmxvZy1wb3N0c1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdHMuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wb3N0X2NvbXAuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbQmxvZ1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwb3N0czogQXJyYXk8UG9zdD4gPSBbXTtcclxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGE6IEJsb2dTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICAvL09uIEluaXQgcHVsbHMgYW5kIHNhdmVzIFBvc3RzIGludG8gYSBwb3N0IGFycmF5PFBvc3Q+XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9zdHMoKS5zdWJzY3JpYmUocG9zdHM9PntcclxuICAgICAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0PT50aGlzLnBvc3RzLnB1c2gocG9zdCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BbGxvd3MgdGhlIHVzZXIgdG8gc2VhcmNoIGZvciBhIGNlcnRhaW4gYmxvZyBwb3N0LlxyXG4gICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZC5cclxuICAgIHB1YmxpYyBzZWFyY2goKXtcclxuICAgICAgICBhbGVydChcIllvdSBoYXZlIGNsaWNrZWQgdGhlIHNlYXJjaCBidXR0b24uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQWxsb3dzIHRoZSB1c2VyIHRvIGFjY2VzcyB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIGJhZERyYXdlcigpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgY2xpY2tlZCBvbiB0aGUgYnJva2VuLCBuYXZEcmF3ZXIgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
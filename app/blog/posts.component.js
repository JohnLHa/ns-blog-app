"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var blog_service_1 = require("./blog.service");
var PostsComponent = (function () {
    function PostsComponent(data, page) {
        this.data = data;
        this.page = page;
        this.posts = [];
        this.isSearching = false;
        page.actionBarHidden = true;
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
        if (!this.isSearching) {
            this.isSearching = true;
        }
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
    __metadata("design:paramtypes", [blog_service_1.BlogService,
        page_1.Page])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBRS9GLGdDQUErQjtBQUsvQiwrQ0FBNkM7QUFXN0MsSUFBYSxjQUFjO0lBS3ZCLHdCQUNZLElBQWlCLEVBQ2pCLElBQVU7UUFEVixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFNBQUksR0FBSixJQUFJLENBQU07UUFOdEIsVUFBSyxHQUFnQixFQUFFLENBQUM7UUFFeEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNUixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRVQsdURBQXVEO0lBQ3ZELGlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQTtRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsdUJBQXVCO0lBQ2hCLCtCQUFNLEdBQWI7UUFDSSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzlCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FPb0IsMEJBQVc7UUFDWCxXQUFJO0dBUGIsY0FBYyxDQTBCMUI7QUExQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQgeyBCbG9nU2VydmljZSB9IGZyb20gXCIuL2Jsb2cuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTaWRlRHJhd2VyR2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQgfSBmcm9tIFwiLi9kcmF3ZXIuY29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJibG9nLXBvc3RzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0cy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Bvc3RfY29tcC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBvc3RzOiBBcnJheTxQb3N0PiA9IFtdO1xyXG4gICAgcHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG4gICAgaXNTZWFyY2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGRhdGE6IEJsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAvL09uIEluaXQgcHVsbHMgYW5kIHNhdmVzIFBvc3RzIGludG8gYSBwb3N0IGFycmF5PFBvc3Q+XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEucG9zdHMoKS5zdWJzY3JpYmUocG9zdHM9PntcclxuICAgICAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0PT50aGlzLnBvc3RzLnB1c2gocG9zdCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BbGxvd3MgdGhlIHVzZXIgdG8gc2VhcmNoIGZvciBhIGNlcnRhaW4gYmxvZyBwb3N0LlxyXG4gICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZC5cclxuICAgIHB1YmxpYyBzZWFyY2goKXtcclxuICAgICAgICBpZighdGhpcy5pc1NlYXJjaGluZyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTZWFyY2hpbmc9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
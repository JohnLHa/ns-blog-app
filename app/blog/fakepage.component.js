"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var FakePageComponent = (function () {
    function FakePageComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    FakePageComponent.prototype.ngOnInit = function () {
    };
    FakePageComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    //Share button to share a blog through social media.
    FakePageComponent.prototype.share = function () {
        alert("You have pressed the share button.");
    };
    //Saves the blog post to the user's bookmarks.
    //Needs to be finished.
    FakePageComponent.prototype.bookmark = function () {
        alert("You have pressed the bookmark button.");
    };
    return FakePageComponent;
}());
FakePageComponent = __decorate([
    core_1.Component({
        selector: "fake-page",
        moduleId: module.id,
        templateUrl: "./fake.html"
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], FakePageComponent);
exports.FakePageComponent = FakePageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFrZXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBSzFDLHNEQUE4RDtBQVE5RCxJQUFhLGlCQUFpQjtJQUUxQiwyQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELG9DQUFRLEdBQVI7SUFFQSxDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0RBQW9EO0lBQzdDLGlDQUFLLEdBQVo7UUFDSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsOENBQThDO0lBQzlDLHVCQUF1QjtJQUNoQixvQ0FBUSxHQUFmO1FBQ0ksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSxpQkFBaUI7SUFMN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO3FDQUd3Qyx5QkFBZ0I7R0FGN0MsaUJBQWlCLENBc0I3QjtBQXRCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZmFrZS1wYWdlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9mYWtlLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFrZVBhZ2VDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb0JhY2soKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2hhcmUgYnV0dG9uIHRvIHNoYXJlIGEgYmxvZyB0aHJvdWdoIHNvY2lhbCBtZWRpYS5cclxuICAgIHB1YmxpYyBzaGFyZSgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgc2hhcmUgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NhdmVzIHRoZSBibG9nIHBvc3QgdG8gdGhlIHVzZXIncyBib29rbWFya3MuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIGJvb2ttYXJrKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBib29rbWFyayBidXR0b24uXCIpO1xyXG4gICAgfVxyXG59Il19
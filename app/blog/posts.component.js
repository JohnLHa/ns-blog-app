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
    PostsComponent.prototype.onItemSelected = function () {
        console.log("Item selected.");
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
sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE0QztBQVM1QyxJQUFhLGNBQWM7SUFHdkIsd0JBQW9CLElBQWlCO1FBQWpCLFNBQUksR0FBSixJQUFJLENBQWE7UUFGckMsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFFaUIsQ0FBQztJQUUxQyxpQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sdUNBQWMsR0FBckI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUM5QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBSTRCLDBCQUFXO0dBSDVCLGNBQWMsQ0FhMUI7QUFiWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIlxyXG5cclxuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9ibG9nLnNlcnZpY2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJibG9nLXBvc3RzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0cy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Bvc3RfY29tcC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtCbG9nU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBvc3RzOiBBcnJheTxQb3N0PiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YTogQmxvZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wb3N0cygpLnN1YnNjcmliZShwb3N0cz0+e1xyXG4gICAgICAgICAgICBwb3N0cy5mb3JFYWNoKHBvc3Q9PnRoaXMucG9zdHMucHVzaChwb3N0KSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gc2VsZWN0ZWQuXCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
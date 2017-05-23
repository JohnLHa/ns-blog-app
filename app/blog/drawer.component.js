"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var SideDrawerGettingStartedComponent = (function () {
    function SideDrawerGettingStartedComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
        this.isDrawerOpen = false;
    }
    SideDrawerGettingStartedComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    SideDrawerGettingStartedComponent.prototype.ngOnInit = function () {
    };
    //Allows the user to search for a certain blog post.
    //Needs to be finished.
    SideDrawerGettingStartedComponent.prototype.search = function () {
        alert("You have clicked the search button.");
    };
    SideDrawerGettingStartedComponent.prototype.openDrawer = function () {
        if (this.isDrawerOpen) {
            this.drawer.closeDrawer();
            this.isDrawerOpen = false;
        }
        else {
            this.drawer.showDrawer();
            this.isDrawerOpen = true;
        }
    };
    return SideDrawerGettingStartedComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SideDrawerGettingStartedComponent.prototype, "drawerComponent", void 0);
SideDrawerGettingStartedComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "my-drawer",
        templateUrl: "./drawer.html",
        styleUrls: ['drawer.css']
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], SideDrawerGettingStartedComponent);
exports.SideDrawerGettingStartedComponent = SideDrawerGettingStartedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFJL0Ysc0VBQW9HO0FBU3BHLElBQWEsaUNBQWlDO0lBRzFDLDJDQUFvQixtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUYxRCxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQUdyQixDQUFDO0lBS0QsMkRBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxvREFBUSxHQUFSO0lBRUEsQ0FBQztJQUVELG9EQUFvRDtJQUNwRCx1QkFBdUI7SUFDaEIsa0RBQU0sR0FBYjtRQUNJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxzREFBVSxHQUFqQjtRQUVJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDO0lBRUwsQ0FBQztJQUNMLHdDQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQTlCc0M7SUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFBeUIsZ0NBQXNCOzBFQUFDO0FBTnpFLGlDQUFpQztJQU43QyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztLQUM1QixDQUFDO3FDQUkyQyx3QkFBaUI7R0FIakQsaUNBQWlDLENBb0M3QztBQXBDWSw4RUFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm15LWRyYXdlclwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kcmF3ZXIuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2RyYXdlci5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlckdldHRpbmdTdGFydGVkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuICAgIGlzRHJhd2VyT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL0FsbG93cyB0aGUgdXNlciB0byBzZWFyY2ggZm9yIGEgY2VydGFpbiBibG9nIHBvc3QuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIHNlYXJjaCgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgY2xpY2tlZCB0aGUgc2VhcmNoIGJ1dHRvbi5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNEcmF3ZXJPcGVuKXtcclxuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pc0RyYXdlck9wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhd2VyT3BlbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ==
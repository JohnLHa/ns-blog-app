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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFJL0Ysc0VBQW9HO0FBU3BHLElBQWEsaUNBQWlDO0lBRzFDLDJDQUFvQixtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUYxRCxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQUdyQixDQUFDO0lBS0QsMkRBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxvREFBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLHNEQUFVLEdBQWpCO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUM7SUFFTCxDQUFDO0lBQ0wsd0NBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBeEJzQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF5QixnQ0FBc0I7MEVBQUM7QUFOekUsaUNBQWlDO0lBTjdDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzVCLENBQUM7cUNBSTJDLHdCQUFpQjtHQUhqRCxpQ0FBaUMsQ0E4QjdDO0FBOUJZLDhFQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibXktZHJhd2VyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RyYXdlci5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnZHJhd2VyLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlRHJhd2VyR2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG4gICAgaXNEcmF3ZXJPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzRHJhd2VyT3Blbil7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcmF3ZXJPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pc0RyYXdlck9wZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0=
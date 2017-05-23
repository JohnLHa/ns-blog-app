"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var SideDrawerGettingStartedComponent = (function () {
    function SideDrawerGettingStartedComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    SideDrawerGettingStartedComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    SideDrawerGettingStartedComponent.prototype.ngOnInit = function () {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    };
    Object.defineProperty(SideDrawerGettingStartedComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    SideDrawerGettingStartedComponent.prototype.openDrawer = function () {
        console.log("Button works doe");
        this.drawer.showDrawer();
    };
    SideDrawerGettingStartedComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFJL0Ysc0VBQW9HO0FBU3BHLElBQWEsaUNBQWlDO0lBRzFDLDJDQUFvQixtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtJQUMxRCxDQUFDO0lBS0QsMkRBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxvREFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyw2UkFBNlIsQ0FBQztJQUN6VCxDQUFDO0lBRUQsc0JBQUksOERBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFFRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFNTSxzREFBVSxHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSw0REFBZ0IsR0FBdkI7UUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDTCx3Q0FBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUE1QnNDO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQXlCLGdDQUFzQjswRUFBQztBQU56RSxpQ0FBaUM7SUFON0MsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsZUFBZTtRQUM1QixTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDNUIsQ0FBQztxQ0FJMkMsd0JBQWlCO0dBSGpELGlDQUFpQyxDQWtDN0M7QUFsQ1ksOEVBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJteS1kcmF3ZXJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZHJhd2VyLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWydkcmF3ZXIuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVEcmF3ZXJHZXR0aW5nU3RhcnRlZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgSFRNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyB0a0RyYXdlckNvbnRlbnQgYW5kIHRrTWFpbkNvbnRlbnQuIFRoZSBjb21wb25lbnQgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1haW5Db250ZW50VGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbkNvbnRlbnRUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX21haW5Db250ZW50VGV4dCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdvcmtzIGRvZVwiKTtcclxuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgfVxyXG59Il19
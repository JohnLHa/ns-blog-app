"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.displayLoginDialog = function () {
        // >> login-dialog-code
        var options = {
            title: "Login",
            message: "Login",
            username: "john_doe",
            password: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        };
        dialogs.login(options).then(function (loginResult) {
            console.log(loginResult.result);
        });
        // << login-dialog-code
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./login.html"
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG9DQUFzQztBQU10QyxJQUFhLGNBQWM7SUFBM0I7SUFnQkEsQ0FBQztJQWZHLDJDQUFrQixHQUFsQjtRQUNJLHVCQUF1QjtRQUN2QixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLEVBQUU7WUFDWixZQUFZLEVBQUUsSUFBSTtZQUNsQixnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUM7UUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFdBQWdDO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsdUJBQXVCO0lBQzNCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksY0FBYztJQUoxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7R0FDVyxjQUFjLENBZ0IxQjtBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBkaXNwbGF5TG9naW5EaWFsb2coKSB7XHJcbiAgICAgICAgLy8gPj4gbG9naW4tZGlhbG9nLWNvZGVcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJMb2dpblwiLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogXCJqb2huX2RvZVwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRpYWxvZ3MubG9naW4ob3B0aW9ucykudGhlbigobG9naW5SZXN1bHQ6IGRpYWxvZ3MuTG9naW5SZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobG9naW5SZXN1bHQucmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyA8PCBsb2dpbi1kaWFsb2ctY29kZVxyXG4gICAgfVxyXG59Il19
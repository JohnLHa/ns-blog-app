"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var LoginDialogComponent = (function () {
    function LoginDialogComponent() {
    }
    LoginDialogComponent.prototype.displayLoginDialog = function () {
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
    return LoginDialogComponent;
}());
LoginDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "./login.html"
    })
], LoginDialogComponent);
exports.LoginDialogComponent = LoginDialogComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLG9DQUFzQztBQU10QyxJQUFhLG9CQUFvQjtJQUFqQztJQWdCQSxDQUFDO0lBZkcsaURBQWtCLEdBQWxCO1FBQ0ksdUJBQXVCO1FBQ3ZCLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUNaLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLFFBQVE7U0FDN0IsQ0FBQztRQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsV0FBZ0M7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCx1QkFBdUI7SUFDM0IsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxvQkFBb0I7SUFKaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO0dBQ1csb0JBQW9CLENBZ0JoQztBQWhCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5EaWFsb2dDb21wb25lbnQge1xyXG4gICAgZGlzcGxheUxvZ2luRGlhbG9nKCkge1xyXG4gICAgICAgIC8vID4+IGxvZ2luLWRpYWxvZy1jb2RlXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvZ2luXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiTG9naW5cIixcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFwiam9obl9kb2VcIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxyXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaWFsb2dzLmxvZ2luKG9wdGlvbnMpLnRoZW4oKGxvZ2luUmVzdWx0OiBkaWFsb2dzLkxvZ2luUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ2luUmVzdWx0LnJlc3VsdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gPDwgbG9naW4tZGlhbG9nLWNvZGVcclxuICAgIH1cclxufSJdfQ==
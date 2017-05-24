"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchBarComponent = (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    };
    SearchBarComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    core_1.Component({
        selector: "search-bar",
        moduleId: module.id,
        templateUrl: "./searchbar.html"
    })
], SearchBarComponent);
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFRMUMsSUFBYSxrQkFBa0I7SUFBL0I7SUFZQSxDQUFDO0lBVFUscUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sMENBQWEsR0FBcEIsVUFBcUIsSUFBSTtRQUNyQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtLQUNsQyxDQUFDO0dBQ1csa0JBQWtCLENBWTlCO0FBWlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwic2VhcmNoLWJhclwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VhcmNoYmFyLmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgb25TdWJtaXQoYXJncykge1xyXG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgc2VhcmNoQmFyLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaEJhciB0ZXh0IGNoYW5nZWQhIE5ldyB2YWx1ZTogXCIgKyBzZWFyY2hCYXIudGV4dCk7XHJcbiAgICB9XHJcbn0iXX0=
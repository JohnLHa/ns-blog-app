"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var Config_1 = require("../Config");
//import { Item } from "./item"
var post_1 = require("./post");
require("rxjs/add/operator/map");
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
    }
    BlogService.prototype.posts = function () {
        var headers = new http_1.Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config_1.Config.apiKey);
        var result = this.http.get(Config_1.Config.apiUrl + "Posts", { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var posts = new Array();
            data.forEach(function (post) {
                posts.push(new post_1.Post(post.title, post.body, post.slug));
            });
            return posts;
        }).catch(this.handleErrors);
        return result;
    };
    BlogService.prototype.handleErrors = function (error, caught) {
        console.log(JSON.stringify(error));
        return Rx_1.Observable.throw(error);
    };
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNDQUF1RDtBQUN2RCw4QkFBcUM7QUFDckMsb0NBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQiwrQkFBNkI7QUFFN0IsaUNBQStCO0FBRy9CLElBQWEsV0FBVztJQUNwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWxDLDJCQUFLLEdBQUw7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNELElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDMUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzFCO1FBRUwsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQUssRUFBRSxNQUFNO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVpQixXQUFJO0dBRHJCLFdBQVcsQ0F5QnZCO0FBekJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vQ29uZmlnXCJcclxuLy9pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiXHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCJcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmxvZ1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIHBvc3RzKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgQ29uZmlnLmFwaUtleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcIlBvc3RzXCIsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGxldCBwb3N0cyA9IG5ldyBBcnJheTxQb3N0PigpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMucHVzaChuZXcgUG9zdChwb3N0LnRpdGxlLCBwb3N0LmJvZHksIHBvc3Quc2x1ZykpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0cztcclxuICAgICAgICAgICAgfSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IsIGNhdWdodCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59Il19
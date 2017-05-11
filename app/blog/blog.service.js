"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var Config_1 = require("../Config");
require("rxjs/add/operator/filter");
var post_1 = require("./post");
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
    BlogService.prototype.getPostBySlug = function (slug) {
        var headers = new http_1.Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config_1.Config.apiKey);
        var result = this.http.get(Config_1.Config.postUrl + slug, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleErrors);
        return result;
    };
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNDQUF1RDtBQUN2RCw4QkFBcUM7QUFDckMsb0NBQWtDO0FBQ2xDLG9DQUFrQztBQUNsQywrQkFBNkI7QUFJN0IsSUFBYSxXQUFXO0lBQ3BCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsMkJBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0QsSUFBSSxNQUFNLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDcEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUMxRCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDMUI7UUFFTCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBSyxFQUFFLE1BQU07UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0QsSUFBSSxNQUFNLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDbEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FFaUIsV0FBSTtHQURyQixXQUFXLENBbUN2QjtBQW5DWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL0NvbmZpZ1wiXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIlxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJsb2dTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBwb3N0cygpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCIsIENvbmZpZy5hcGlLZXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciByZXN1bHQgPSAgdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCJQb3N0c1wiLCB7IGhlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLm1hcChkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zdHMgPSBuZXcgQXJyYXk8UG9zdD4oKTtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLnB1c2gobmV3IFBvc3QocG9zdC50aXRsZSwgcG9zdC5ib2R5LCBwb3N0LnNsdWcpKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdHM7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yLCBjYXVnaHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3N0QnlTbHVnKHNsdWc6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgQ29uZmlnLmFwaUtleSk7XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSAgdGhpcy5odHRwLmdldChDb25maWcucG9zdFVybCArIHNsdWcsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59Il19
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
        this.title = "";
        this.body = "";
        this.slug = "";
        this.post = new post_1.Post(this.title, this.body, this.slug);
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
        console.log(Config_1.Config.postUrl + slug);
        return this.http.get(Config_1.Config.postUrl + slug, { headers: headers })
            .map(function (res) { return res.json(); });
        // .do(x => console.log(x))
        // .map(data=> {
        //     let post = new Post(data.title, data.body, data.slug);
        //     post.tags = data.tags;
        //     return post;
        // })   .catch(this.handleErrors)
    };
    BlogService.prototype.postComment = function (comment, slug) {
        var headers = new http_1.Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config_1.Config.apiKey);
        console.log(Config_1.Config.getCommentUrl + slug);
        return this.http.post(Config_1.Config.getCommentUrl + slug, { comment: comment }, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNDQUF1RDtBQUN2RCw4QkFBcUM7QUFDckMsb0NBQWtDO0FBQ2xDLG9DQUFrQztBQUNsQywrQkFBNkI7QUFJN0IsSUFBYSxXQUFXO0lBS3BCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5QixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRWxDLDJCQUFLLEdBQUw7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNELElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDMUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzFCO1FBRUwsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQUssRUFBRSxNQUFNO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBRXJCLDJCQUEyQjtRQUM5QixnQkFBZ0I7UUFDYiw2REFBNkQ7UUFDN0QsNkJBQTZCO1FBQzdCLG1CQUFtQjtRQUN0QixpQ0FBaUM7SUFFckMsQ0FBQztJQUNGLGlDQUFXLEdBQVgsVUFBWSxPQUFjLEVBQUUsSUFBWTtRQUNwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzdFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBdkRZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FNaUIsV0FBSTtHQUxyQixXQUFXLENBdUR2QjtBQXZEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIlxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL0NvbmZpZ1wiXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIlxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJsb2dTZXJ2aWNlIHtcclxuICAgIHRpdGxlID0gXCJcIjtcclxuICAgIGJvZHkgPSBcIlwiO1xyXG4gICAgc2x1ZyA9IFwiXCI7XHJcbiAgICBwb3N0ID0gbmV3IFBvc3QodGhpcy50aXRsZSwgdGhpcy5ib2R5LCB0aGlzLnNsdWcpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIHBvc3RzKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgQ29uZmlnLmFwaUtleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcIlBvc3RzXCIsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGxldCBwb3N0cyA9IG5ldyBBcnJheTxQb3N0PigpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMucHVzaChuZXcgUG9zdChwb3N0LnRpdGxlLCBwb3N0LmJvZHksIHBvc3Quc2x1ZykpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0cztcclxuICAgICAgICAgICAgfSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3IsIGNhdWdodCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc3RCeVNsdWcoc2x1Zzogc3RyaW5nKSB7XHJcblx0ICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHQgICAgaGVhZGVycy5hcHBlbmQoXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCIsIENvbmZpZy5hcGlLZXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKENvbmZpZy5wb3N0VXJsICsgc2x1Zyk7XHJcblx0ICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5wb3N0VXJsICsgc2x1ZywgeyBoZWFkZXJzOiBoZWFkZXJzfSlcclxuXHQgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLmRvKHggPT4gY29uc29sZS5sb2coeCkpXHJcblx0ICAgICAgICAvLyAubWFwKGRhdGE9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KGRhdGEudGl0bGUsIGRhdGEuYm9keSwgZGF0YS5zbHVnKTtcclxuICAgICAgICAgICAgLy8gICAgIHBvc3QudGFncyA9IGRhdGEudGFncztcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBwb3N0O1xyXG5cdCAgICAgICAgLy8gfSkgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcblxyXG5cdCAgICB9XHJcbiAgICBwb3N0Q29tbWVudChjb21tZW50OnN0cmluZywgc2x1Zzogc3RyaW5nKXtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiLCBDb25maWcuYXBpS2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb25maWcuZ2V0Q29tbWVudFVybCArIHNsdWcpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLmdldENvbW1lbnRVcmwgKyBzbHVnLCB7Y29tbWVudH0sIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycylcclxuICAgIH1cclxuXHJcbn0iXX0=
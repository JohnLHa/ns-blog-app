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
        ;
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
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNDQUF1RDtBQUN2RCw4QkFBcUM7QUFDckMsb0NBQWtDO0FBQ2xDLG9DQUFrQztBQUNsQywrQkFBNkI7QUFJN0IsSUFBYSxXQUFXO0lBS3BCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5QixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRWxDLDJCQUFLLEdBQUw7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNELElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDMUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzFCO1FBRUwsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQUssRUFBRSxNQUFNO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzNELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUVyQiwyQkFBMkI7UUFDOUIsZ0JBQWdCO1FBQ2IsNkRBQTZEO1FBQzdELDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDdEIsaUNBQWlDO0lBRXJDLENBQUM7SUFFTixrQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQU1pQixXQUFJO0dBTHJCLFdBQVcsQ0E4Q3ZCO0FBOUNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vQ29uZmlnXCJcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmxvZ1NlcnZpY2Uge1xyXG4gICAgdGl0bGUgPSBcIlwiO1xyXG4gICAgYm9keSA9IFwiXCI7XHJcbiAgICBzbHVnID0gXCJcIjtcclxuICAgIHBvc3QgPSBuZXcgUG9zdCh0aGlzLnRpdGxlLCB0aGlzLmJvZHksIHRoaXMuc2x1Zyk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgcG9zdHMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiLCBDb25maWcuYXBpS2V5KTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgcmVzdWx0ID0gIHRoaXMuaHR0cC5nZXQoQ29uZmlnLmFwaVVybCArIFwiUG9zdHNcIiwgeyBoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcChyZXM9PnJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc3RzID0gbmV3IEFycmF5PFBvc3Q+KCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3N0cy5wdXNoKG5ldyBQb3N0KHBvc3QudGl0bGUsIHBvc3QuYm9keSwgcG9zdC5zbHVnKSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RzO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICAgICAgO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvciwgY2F1Z2h0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zdEJ5U2x1ZyhzbHVnOiBzdHJpbmcpIHtcclxuXHQgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdCAgICBoZWFkZXJzLmFwcGVuZChcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgQ29uZmlnLmFwaUtleSk7O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKENvbmZpZy5wb3N0VXJsICsgc2x1Zyk7XHJcblx0ICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5wb3N0VXJsICsgc2x1ZywgeyBoZWFkZXJzOiBoZWFkZXJzfSlcclxuXHQgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gLmRvKHggPT4gY29uc29sZS5sb2coeCkpXHJcblx0ICAgICAgICAvLyAubWFwKGRhdGE9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KGRhdGEudGl0bGUsIGRhdGEuYm9keSwgZGF0YS5zbHVnKTtcclxuICAgICAgICAgICAgLy8gICAgIHBvc3QudGFncyA9IGRhdGEudGFncztcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBwb3N0O1xyXG5cdCAgICAgICAgLy8gfSkgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcblxyXG5cdCAgICB9XHJcblxyXG59Il19
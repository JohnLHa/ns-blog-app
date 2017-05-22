"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var Config_1 = require("../Config");
require("rxjs/add/operator/filter");
var post_1 = require("./post");
var comment_1 = require("./comment");
var BlogService = (function () {
    function BlogService(http) {
        this.http = http;
        this.title = "";
        this.body = "";
        this.slug = "";
    }
    //Pulls the Posts from the Blog API and returns the array of Posts to the post component
    BlogService.prototype.posts = function () {
        var headers = new http_1.Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config_1.Config.apiKey);
        var result = this.http.get(Config_1.Config.apiUrl + "Posts", { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var posts = new Array();
            data.forEach(function (post) {
                posts.push(new post_1.Post(post.title, post.body, post.slug, post.isStatic, post.isFeatured, post.dateCreated, post.datePublished, post.status, post.tags));
            });
            return posts;
        }).catch(this.handleErrors);
        return result;
    };
    //Reports the error for any of the data being pulled or pushed from/to the Blog API
    BlogService.prototype.handleErrors = function (error, caught) {
        console.log(JSON.stringify(error));
        return Rx_1.Observable.throw(error);
    };
    //Pulls a Post by slug to open up and read
    //Needs to be fixed like how comments are chosen by the delete function
    BlogService.prototype.getPostBySlug = function (slug) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.get(Config_1.Config.postUrl + slug, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var post = new post_1.Post(data.title, data.body, data.slug, data.isStatic, data.isFeatured, data.dateCreated, data.datePublished, data.status, data.tags);
            return post;
        }).catch(this.handleErrors);
    };
    //Posts a Comment to the Blog API to be posted.
    BlogService.prototype.postComment = function (comment, slug) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(Config_1.Config.createCommentUrl + slug, JSON.stringify({
            "Email": comment.email,
            "Message": comment.message,
            "Name": comment.name
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    //Gets all comments for a blog post and stores them in a Comment array 
    BlogService.prototype.getComments = function (slug) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var result = this.http.get(Config_1.Config.getAllCommentsUrl + slug, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var comments = new Array();
            data.forEach(function (comment) {
                comments.push(new comment_1.Comment(comment.id, comment.email, comment.message, comment.user, comment.dateCreated));
            });
            return comments;
        }).catch(this.handleErrors);
        return result;
    };
    //Gets an id of type GUID and deletes it from the Blog API
    BlogService.prototype.deleteComment = function (id) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.delete(Config_1.Config.deleteCommentUrl + id)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNDQUF1RDtBQUN2RCw4QkFBcUM7QUFDckMsb0NBQWtDO0FBQ2xDLG9DQUFrQztBQUNsQywrQkFBNkI7QUFDN0IscUNBQW1DO0FBSW5DLElBQWEsV0FBVztJQU1wQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFKOUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBRXVCLENBQUM7SUFFbEMsd0ZBQXdGO0lBQ3hGLDJCQUFLLEdBQUw7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNELElBQUksTUFBTSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFRLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVB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LFdBQVcsQ0FpR3ZCO0FBakdZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vQ29uZmlnXCJcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiXHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCJcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCbG9nU2VydmljZSB7XHJcbiAgICBcclxuICAgIHRpdGxlID0gXCJcIjtcclxuICAgIGJvZHkgPSBcIlwiO1xyXG4gICAgc2x1ZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIC8vUHVsbHMgdGhlIFBvc3RzIGZyb20gdGhlIEJsb2cgQVBJIGFuZCByZXR1cm5zIHRoZSBhcnJheSBvZiBQb3N0cyB0byB0aGUgcG9zdCBjb21wb25lbnRcclxuICAgIHBvc3RzKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgQ29uZmlnLmFwaUtleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcIlBvc3RzXCIsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGxldCBwb3N0cyA9IG5ldyBBcnJheTxQb3N0PigpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMucHVzaChuZXcgUG9zdChwb3N0LnRpdGxlLCBwb3N0LmJvZHksIHBvc3Quc2x1ZywgcG9zdC5pc1N0YXRpYywgcG9zdC5pc0ZlYXR1cmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3QuZGF0ZUNyZWF0ZWQsIHBvc3QuZGF0ZVB1Ymxpc2hlZCwgcG9zdC5zdGF0dXMsIHBvc3QudGFncykpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0cztcclxuICAgICAgICAgICAgfSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvL1JlcG9ydHMgdGhlIGVycm9yIGZvciBhbnkgb2YgdGhlIGRhdGEgYmVpbmcgcHVsbGVkIG9yIHB1c2hlZCBmcm9tL3RvIHRoZSBCbG9nIEFQSVxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yLCBjYXVnaHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1B1bGxzIGEgUG9zdCBieSBzbHVnIHRvIG9wZW4gdXAgYW5kIHJlYWRcclxuICAgIC8vTmVlZHMgdG8gYmUgZml4ZWQgbGlrZSBob3cgY29tbWVudHMgYXJlIGNob3NlbiBieSB0aGUgZGVsZXRlIGZ1bmN0aW9uXHJcbiAgICBnZXRQb3N0QnlTbHVnKHNsdWc6IHN0cmluZykge1xyXG5cdCAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcblx0ICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5wb3N0VXJsICsgc2x1ZywgeyBoZWFkZXJzOiBoZWFkZXJzfSlcclxuXHQgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zdCA9IG5ldyBQb3N0KGRhdGEudGl0bGUsIGRhdGEuYm9keSwgZGF0YS5zbHVnLCBkYXRhLmlzU3RhdGljLCBkYXRhLmlzRmVhdHVyZWQsIFxyXG4gICAgICAgICAgICAgICAgZGF0YS5kYXRlQ3JlYXRlZCwgZGF0YS5kYXRlUHVibGlzaGVkLCBkYXRhLnN0YXR1cywgZGF0YS50YWdzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0O1xyXG4gICAgICAgICAgICB9KS5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcblxyXG5cdH1cclxuXHJcbiAgICAvL1Bvc3RzIGEgQ29tbWVudCB0byB0aGUgQmxvZyBBUEkgdG8gYmUgcG9zdGVkLlxyXG4gICAgcG9zdENvbW1lbnQoY29tbWVudDogQ29tbWVudCwgc2x1Zzogc3RyaW5nKXtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5jcmVhdGVDb21tZW50VXJsICsgc2x1ZyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBcIkVtYWlsXCI6IGNvbW1lbnQuZW1haWwsXHJcbiAgICAgICAgICAgIFwiTWVzc2FnZVwiOiBjb21tZW50Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIFwiTmFtZVwiOiBjb21tZW50Lm5hbWVcclxuICAgICAgICB9KSwgXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vR2V0cyBhbGwgY29tbWVudHMgZm9yIGEgYmxvZyBwb3N0IGFuZCBzdG9yZXMgdGhlbSBpbiBhIENvbW1lbnQgYXJyYXkgXHJcbiAgICBnZXRDb21tZW50cyhzbHVnOiBzdHJpbmcpe1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICB0aGlzLmh0dHAuZ2V0KENvbmZpZy5nZXRBbGxDb21tZW50c1VybCArIHNsdWcsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGxldCBjb21tZW50cyA9IG5ldyBBcnJheTxDb21tZW50PigpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudHMucHVzaChuZXcgQ29tbWVudChjb21tZW50LmlkLCBjb21tZW50LmVtYWlsLCBjb21tZW50Lm1lc3NhZ2UsIGNvbW1lbnQudXNlciwgY29tbWVudC5kYXRlQ3JlYXRlZCkpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgICAgICAgICAgfSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXRzIGFuIGlkIG9mIHR5cGUgR1VJRCBhbmQgZGVsZXRlcyBpdCBmcm9tIHRoZSBCbG9nIEFQSVxyXG4gICAgZGVsZXRlQ29tbWVudChpZDogc3RyaW5nKXtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoQ29uZmlnLmRlbGV0ZUNvbW1lbnRVcmwgKyBpZClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSJdfQ==
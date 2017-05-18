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
        this.post = new post_1.Post(this.title, this.body, this.slug);
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
                posts.push(new post_1.Post(post.title, post.body, post.slug));
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
        headers.append("Ocp-Apim-Subscription-Key", Config_1.Config.apiKey);
        console.log(Config_1.Config.postUrl + slug);
        return this.http.get(Config_1.Config.postUrl + slug, { headers: headers })
            .map(function (res) { return res.json(); });
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
        headers.append("Ocp-Apim-Subscription-Key", Config_1.Config.apiKey);
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
        console.log("about to delete this sucka");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNDQUF1RDtBQUN2RCw4QkFBcUM7QUFDckMsb0NBQWtDO0FBQ2xDLG9DQUFrQztBQUNsQywrQkFBNkI7QUFDN0IscUNBQW1DO0FBSW5DLElBQWEsV0FBVztJQU9wQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFMOUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakIsQ0FBQztJQUVsQyx3RkFBd0Y7SUFDeEYsMkJBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0QsSUFBSSxNQUFNLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDcEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNwQixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ0wsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLElB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S0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtZQUM3RyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDMUI7UUFFTCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsbUNBQWEsR0FBYixVQUFjLEVBQVU7UUFDcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRWhELE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBTSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzthQUNoRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUdMLGtCQUFDO0FBQUQsQ0FBQyxBQTdGRCxJQTZGQztBQTdGWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBUWlCLFdBQUk7R0FQckIsV0FBVyxDQTZGdkI7QUE3Rlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCJcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9Db25maWdcIlxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCJcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuL2NvbW1lbnRcIlxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJsb2dTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgdGl0bGUgPSBcIlwiO1xyXG4gICAgYm9keSA9IFwiXCI7XHJcbiAgICBzbHVnID0gXCJcIjtcclxuICAgIHBvc3QgPSBuZXcgUG9zdCh0aGlzLnRpdGxlLCB0aGlzLmJvZHksIHRoaXMuc2x1Zyk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIC8vUHVsbHMgdGhlIFBvc3RzIGZyb20gdGhlIEJsb2cgQVBJIGFuZCByZXR1cm5zIHRoZSBhcnJheSBvZiBQb3N0cyB0byB0aGUgcG9zdCBjb21wb25lbnRcclxuICAgIHBvc3RzKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgQ29uZmlnLmFwaUtleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcIlBvc3RzXCIsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGxldCBwb3N0cyA9IG5ldyBBcnJheTxQb3N0PigpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMucHVzaChuZXcgUG9zdChwb3N0LnRpdGxlLCBwb3N0LmJvZHksIHBvc3Quc2x1ZykpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0cztcclxuICAgICAgICAgICAgfSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvL1JlcG9ydHMgdGhlIGVycm9yIGZvciBhbnkgb2YgdGhlIGRhdGEgYmVpbmcgcHVsbGVkIG9yIHB1c2hlZCBmcm9tL3RvIHRoZSBCbG9nIEFQSVxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yLCBjYXVnaHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1B1bGxzIGEgUG9zdCBieSBzbHVnIHRvIG9wZW4gdXAgYW5kIHJlYWRcclxuICAgIC8vTmVlZHMgdG8gYmUgZml4ZWQgbGlrZSBob3cgY29tbWVudHMgYXJlIGNob3NlbiBieSB0aGUgZGVsZXRlIGZ1bmN0aW9uXHJcbiAgICBnZXRQb3N0QnlTbHVnKHNsdWc6IHN0cmluZykge1xyXG5cdCAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiLCBDb25maWcuYXBpS2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb25maWcucG9zdFVybCArIHNsdWcpO1xyXG5cdCAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcucG9zdFVybCArIHNsdWcsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcblx0ICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuXHJcblx0fVxyXG5cclxuICAgIC8vUG9zdHMgYSBDb21tZW50IHRvIHRoZSBCbG9nIEFQSSB0byBiZSBwb3N0ZWQuXHJcbiAgICBwb3N0Q29tbWVudChjb21tZW50OiBDb21tZW50LCBzbHVnOiBzdHJpbmcpe1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHQgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQ29uZmlnLmNyZWF0ZUNvbW1lbnRVcmwgKyBzbHVnLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIFwiRW1haWxcIjogY29tbWVudC5lbWFpbCxcclxuICAgICAgICAgICAgXCJNZXNzYWdlXCI6IGNvbW1lbnQubWVzc2FnZSxcclxuICAgICAgICAgICAgXCJOYW1lXCI6IGNvbW1lbnQubmFtZVxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0dldHMgYWxsIGNvbW1lbnRzIGZvciBhIGJsb2cgcG9zdCBhbmQgc3RvcmVzIHRoZW0gaW4gYSBDb21tZW50IGFycmF5IFxyXG4gICAgZ2V0Q29tbWVudHMoc2x1Zzogc3RyaW5nKXtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCIsIENvbmZpZy5hcGlLZXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciByZXN1bHQgPSAgdGhpcy5odHRwLmdldChDb25maWcuZ2V0QWxsQ29tbWVudHNVcmwgKyBzbHVnLCB7IGhlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLm1hcChkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tbWVudHMgPSBuZXcgQXJyYXk8Q29tbWVudD4oKTtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLnB1c2gobmV3IENvbW1lbnQoY29tbWVudC5pZCwgY29tbWVudC5lbWFpbCwgY29tbWVudC5tZXNzYWdlLCBjb21tZW50LnVzZXIsIGNvbW1lbnQuZGF0ZUNyZWF0ZWQpKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbWVudHM7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0cyBhbiBpZCBvZiB0eXBlIEdVSUQgYW5kIGRlbGV0ZXMgaXQgZnJvbSB0aGUgQmxvZyBBUElcclxuICAgIGRlbGV0ZUNvbW1lbnQoaWQ6IHN0cmluZyl7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdCAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWJvdXQgdG8gZGVsZXRlIHRoaXMgc3Vja2FcIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoQ29uZmlnLmRlbGV0ZUNvbW1lbnRVcmwgKyBpZClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSJdfQ==
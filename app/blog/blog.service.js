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
        headers.append("Content-Type", "application/json");
        console.log(Config_1.Config.createCommentUrl + slug);
        // comment: JSON.stringify({
        //     "id": "123414141414",
        //     "email": "abc@lop.com",
        //     "name": "John",
        //     "message": "This is a hardcoded comment",
        //     "dateCreated": "2017-05-16T20:33:15.7187242"
        // })
        comment.id = "123414141414";
        comment.email = "abc@lop.com";
        comment.name = "John";
        comment.message = "This is a hardcoded message";
        return this.http.post(Config_1.Config.createCommentUrl + slug, JSON.stringify({
            "Email": "abc@lop.com",
            "Message": "This is a hardcoded message",
            "Name": "John"
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    BlogService.prototype.getComments = function (slug) {
        var headers = new http_1.Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config_1.Config.apiKey);
        var result = this.http.get(Config_1.Config.getAllCommentsUrl + slug, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var comments = new Array();
            data.forEach(function (comment) {
                comments.push(new comment_1.Comment(comment.email, comment.message, comment.user));
            });
            return comments;
        }).catch(this.handleErrors);
        return result;
    };
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNDQUF1RDtBQUN2RCw4QkFBcUM7QUFDckMsb0NBQWtDO0FBQ2xDLG9DQUFrQztBQUNsQywrQkFBNkI7QUFDN0IscUNBQW1DO0FBSW5DLElBQWEsV0FBVztJQUtwQixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFKOUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVsQywyQkFBSyxHQUFMO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzRCxJQUFJLE1BQU0sR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNwRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3BCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUss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TyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQzVFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNMLElBQUksUUFBUSxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtZQUM1RSxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDMUI7UUFFTCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUE3RkQsSUE2RkM7QUE3RlksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQU1pQixXQUFJO0dBTHJCLFdBQVcsQ0E2RnZCO0FBN0ZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vQ29uZmlnXCJcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vcG9zdFwiXHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi9jb21tZW50XCJcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCbG9nU2VydmljZSB7XHJcbiAgICB0aXRsZSA9IFwiXCI7XHJcbiAgICBib2R5ID0gXCJcIjtcclxuICAgIHNsdWcgPSBcIlwiO1xyXG4gICAgcG9zdCA9IG5ldyBQb3N0KHRoaXMudGl0bGUsIHRoaXMuYm9keSwgdGhpcy5zbHVnKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBwb3N0cygpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5XCIsIENvbmZpZy5hcGlLZXkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciByZXN1bHQgPSAgdGhpcy5odHRwLmdldChDb25maWcuYXBpVXJsICsgXCJQb3N0c1wiLCB7IGhlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLm1hcChkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zdHMgPSBuZXcgQXJyYXk8UG9zdD4oKTtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLnB1c2gobmV3IFBvc3QocG9zdC50aXRsZSwgcG9zdC5ib2R5LCBwb3N0LnNsdWcpKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdHM7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yLCBjYXVnaHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3N0QnlTbHVnKHNsdWc6IHN0cmluZykge1xyXG5cdCAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKFwiT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleVwiLCBDb25maWcuYXBpS2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb25maWcucG9zdFVybCArIHNsdWcpO1xyXG5cdCAgICByZXR1cm4gdGhpcy5odHRwLmdldChDb25maWcucG9zdFVybCArIHNsdWcsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcblx0ICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIC5kbyh4ID0+IGNvbnNvbGUubG9nKHgpKVxyXG5cdCAgICAgICAgLy8gLm1hcChkYXRhPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHBvc3QgPSBuZXcgUG9zdChkYXRhLnRpdGxlLCBkYXRhLmJvZHksIGRhdGEuc2x1Zyk7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3N0LnRhZ3MgPSBkYXRhLnRhZ3M7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gcG9zdDtcclxuXHQgICAgICAgIC8vIH0pICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG5cclxuXHQgICAgfVxyXG4gICAgcG9zdENvbW1lbnQoY29tbWVudDogQ29tbWVudCwgc2x1Zzogc3RyaW5nKXtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0ICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb25maWcuY3JlYXRlQ29tbWVudFVybCArIHNsdWcpO1xyXG5cclxuICAgICAgICAvLyBjb21tZW50OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgLy8gICAgIFwiaWRcIjogXCIxMjM0MTQxNDE0MTRcIixcclxuICAgICAgICAvLyAgICAgXCJlbWFpbFwiOiBcImFiY0Bsb3AuY29tXCIsXHJcbiAgICAgICAgLy8gICAgIFwibmFtZVwiOiBcIkpvaG5cIixcclxuICAgICAgICAvLyAgICAgXCJtZXNzYWdlXCI6IFwiVGhpcyBpcyBhIGhhcmRjb2RlZCBjb21tZW50XCIsXHJcbiAgICAgICAgLy8gICAgIFwiZGF0ZUNyZWF0ZWRcIjogXCIyMDE3LTA1LTE2VDIwOjMzOjE1LjcxODcyNDJcIlxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIGNvbW1lbnQuaWQgPSBcIjEyMzQxNDE0MTQxNFwiO1xyXG4gICAgICAgIGNvbW1lbnQuZW1haWwgPSBcImFiY0Bsb3AuY29tXCI7XHJcbiAgICAgICAgY29tbWVudC5uYW1lID0gXCJKb2huXCI7XHJcbiAgICAgICAgY29tbWVudC5tZXNzYWdlID0gXCJUaGlzIGlzIGEgaGFyZGNvZGVkIG1lc3NhZ2VcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KENvbmZpZy5jcmVhdGVDb21tZW50VXJsICsgc2x1ZyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBcIkVtYWlsXCI6IFwiYWJjQGxvcC5jb21cIixcclxuICAgICAgICAgICAgXCJNZXNzYWdlXCI6IFwiVGhpcyBpcyBhIGhhcmRjb2RlZCBtZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIFwiTmFtZVwiOiBcIkpvaG5cIlxyXG4gICAgICAgIH0pLCBcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRDb21tZW50cyhzbHVnOiBzdHJpbmcpe1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIiwgQ29uZmlnLmFwaUtleSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICB0aGlzLmh0dHAuZ2V0KENvbmZpZy5nZXRBbGxDb21tZW50c1VybCArIHNsdWcsIHsgaGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAubWFwKGRhdGE9PntcclxuICAgICAgICAgICAgICAgIGxldCBjb21tZW50cyA9IG5ldyBBcnJheTxDb21tZW50PigpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudHMucHVzaChuZXcgQ29tbWVudChjb21tZW50LmVtYWlsLCBjb21tZW50Lm1lc3NhZ2UsIGNvbW1lbnQudXNlcikpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21tZW50cztcclxuICAgICAgICAgICAgfSkuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgICAgIDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICB9XHJcblxyXG59Il19
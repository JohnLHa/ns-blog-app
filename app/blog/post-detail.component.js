"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var blog_service_1 = require("./blog.service");
var router_2 = require("nativescript-angular/router");
var comment_1 = require("./comment");
var comment_component_1 = require("./comment.component");
var PostDetailComponent = (function () {
    function PostDetailComponent(routerExtensions, blogService, route, page, commentComponent) {
        this.routerExtensions = routerExtensions;
        this.blogService = blogService;
        this.route = route;
        this.comments = [];
        this.phrase = "";
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        //const slug: string = this.route.snapshot.params["slug"];
        var slug = "iot-beer-rating"; //hardcoded slug search
        this.post = this.blogService.getPostBySlug(slug);
        this.title = "IoT Beer Rating";
        this.body = "This is really more of a journal post, but if you are interested in any of the sections here, just let me know and I'd be happy to talk further about it.\n\nA co-worker in my day job was working on a demo for a dev-ops process through Visual Studio Team Services and Azure deployments. He needed an application to demonstrate this process. It didn't matter what it was, but I was told that the event would be at a Brewery. With this knowledge, I decided on building a beer rating Internet of Things device.\n\nI have been dabbling in the Internet of Things space for a few months now. I have a Raspberry Pi 2 Model B that drives my 3D printer. I have also been working on an instant replay feature for my day job's foosball table that uses another Raspberry Pi 2 and a USB camera. I am familiar with some of the concepts but I had never really needed to dive deep into any of it. I volunteered to spend my time creating this application and I think it turned out great. This post explains each part and some of the problems I ran into along the way.\n\n![Finished Product](https://lsejcw-bn1305.files.1drv.com/y3mTL5Ef7yxfoOiBC2x6lh-7Os7UQllAcB2D9pucf2hRVxFuvYFnk0z-_xMAU7SX0c4ZG3_jvZeOThy1Vk9Z5oh7hcndBfexnHAdPBiwsP_EtHa0fD4EVhIfRWJ6hp9FxLhXbe7Qiu7EQg40hIZrlwsr42FyWClugnmxusHYG-KbGM?width=864&height=576&cropmode=none)\n\nConcept\n-----\nThe Columbus Brewing Company will have ten draft beers that the event attendees will be sampling. The goal is to create a device where the attendee can place a beer (or a representation of the beer) on a device and be able to rate that beer from 1 to 5. That rating is then sent to Microsoft Azure so that additional processing and reporting can be done on that. Ultimately, the attendees need to be able to see the results of those ratings on a web dashboard. \n\nIngredients\n--------\n- [1 Raspberry Pi 2 Model B](http://amzn.com/B00T2U7R7I)\n- [1 Arduino Uno](http://store-usa.arduino.cc/products/a000066)\n- [5 LED Arcade Buttons with micro switches](http://www.paradisearcadeshop.com/paradise-led-24-k/675-green-black-rim-led-pushbutton.html#/voltage-5v_super_bright_ac_dc/microswitch_force-50_gram_microswitch)\n- [10 NFC Tag Stickers](http://amzn.com/B013YQGG18)\n- 5 330 ohm resistors\n- Breadboard\n- [NXP OM5577/PN7120 NFC Reader](http://amzn.com/B01BJRC46A)\n- About 0.25kg Black PLA printer filament\n- Solid core wire\n\nButton presses and LEDs\n-----------------\n![Button LEDs](https://ymkkaa-bn1305.files.1drv.com/y3mZoHQYYhBi1ib9IeM2vxXfvWvX0Eel3ihRqjs7zKtY5Xa-qe1t2whEx-j_Pkbg4LApMJ3btQe0deqaqEwdR2f-5MbYDCWXL5GGH-jGhBv7h0QqsDJ0YjF2AGmWfs4eQmlUCeNv8zBRE4aUjNfB2FLopq_8yhQndWR_ifYJXQzV50?width=660&height=371&cropmode=none)\nThe functionality I was looking for was to have all five LED buttons light up when a beer is placed on the device. Then when the user presses a button, all other buttons will turn off and the rating you selected will stay lit until the beer is removed.\n\nKnowing that I needed 11 inputs (1 for beer arrived/departed, 5 for button presses, 5 for LEDs) just for this functionality, I knew I would not have enough inputs on one board. I had an Arduino Uno lying around so I decided to use this Arduino for the sole purpose of managing the buttons and LEDs.\n\nThe process of getting code on the Arduino is extremely simple. I just started up";
        this.slug = "iot-beer-rating";
        this.getComments();
        //console.log(this.comments.length);
        /*this.post.subscribe(x=>{
            
            let test = new Post(x.title, x.body, x.slug)
            console.log(JSON.stringify(x.title));
            //console.log(JSON.stringify(x.body));
            console.log(JSON.stringify(x.slug));

            this.title = JSON.stringify(x.title);
            this.body = JSON.stringify(x.body);
            this.slug = JSON.stringify(x.slug);
            //this.date = JSON.parse(x.dateCreated);
            
            
            if(typeof this.title !=='undefined'){
                console.log("title is defined");
            }
            if(typeof this.body !=='undefined'){
                console.log("body is defined");
            }
            if(typeof this.slug !=='undefined'){
                console.log("slug is defined");
            }
            
            if(typeof this.date !=='undefined'){
                console.log("date is defined");
            }
            test.title = this.title;
            test.body = this.body;
            test.slug = this.slug;
            */
        /*if(typeof test.title !=='undefined'){
            console.log("the test title is defined");
        }
        if(typeof test.body !=='undefined'){
            console.log("the test body is defined");
        }
        if(typeof test.slug !=='undefined'){
            console.log("the test slug is defined");
        }

        this.thePost.title = test.title;
        this.thePost.body = test.body;
        this.thePost.slug = test.slug;
        
        if(typeof this.thePost.title !=='undefined'){
            console.log("the post title is defined");
        }
        if(typeof this.thePost.body !=='undefined'){
            console.log("the post body is defined");
        }
        if(typeof this.thePost.slug !=='undefined'){
            console.log("the post slug is defined");
        }

    });*/
    };
    //Pulls all Comments from the blog API and stores it into a comments array<Comment>
    PostDetailComponent.prototype.getComments = function () {
        var _this = this;
        this.blogService.getComments(this.slug)
            .subscribe(function (comments) {
            comments.forEach(function (comment) { return _this.comments.push(comment); });
        });
    };
    //Adds a Comment object created from user input to the blog API
    PostDetailComponent.prototype.addComment = function () {
        var _this = this;
        //Checks to make sure a comment went through
        if (!this.phrase) {
            console.log("it failed");
            return;
        }
        //Creates a new comment and posts using the user's information.
        //Currently hardcoded: email and name. Guid can stay since it's not used.
        //Needs to be finished.
        this.comment = new comment_1.Comment("12345678-9100-poop-guid-amverymature", "abc@gmail.com", this.phrase, "John", new Date());
        this.blogService.postComment(this.comment, this.slug)
            .subscribe(function (comment) {
            _this.comments.push(comment);
        });
        alert("Your comment was posted. Refresh the page to see the changes.");
    };
    PostDetailComponent.prototype.deleteComment = function (item) {
        var _this = this;
        console.log(item.id);
        //Checks to make sure a comment went through
        if (!item) {
            console.log("it failed");
            return;
        }
        //Calls BlogService to delete the comment
        this.blogService.deleteComment(item.id)
            .subscribe(function (comments) {
            comments.forEach(function (comment) { return _this.comments.push(comment); });
        });
        alert("Your comment was deleted. Refresh the page to see the changes.");
    };
    //Back button to return to previous page.
    PostDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    //Share button to share a blog through social media.
    //Needs to be finished.
    PostDetailComponent.prototype.share = function () {
        alert("You have pressed the share button.");
    };
    //Saves the blog post to the user's bookmarks.
    //Needs to be finished.
    PostDetailComponent.prototype.bookmark = function () {
        alert("You have pressed the bookmark button.");
    };
    return PostDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", comment_1.Comment)
], PostDetailComponent.prototype, "comment", void 0);
PostDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./post-detail.component.html",
        styleUrls: ["./post-detail.css"],
        providers: [blog_service_1.BlogService, comment_component_1.CommentComponent]
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        blog_service_1.BlogService,
        router_1.ActivatedRoute,
        page_1.Page,
        comment_component_1.CommentComponent])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQUM5RCxxQ0FBb0M7QUFFcEMseURBQXVEO0FBVXZELElBQWEsbUJBQW1CO0lBZTVCLDZCQUNZLGdCQUFrQyxFQUNsQyxXQUF3QixFQUN4QixLQUFxQixFQUM3QixJQUFVLEVBQ1YsZ0JBQWtDO1FBSjFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFmakMsYUFBUSxHQUFtQixFQUFFLENBQUM7UUFROUIsV0FBTSxHQUFFLEVBQUUsQ0FBQztJQWNYLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksMERBQTBEO1FBQzFELElBQU0sSUFBSSxHQUFXLGlCQUFpQixDQUFDLENBQUMsdUJBQXVCO1FBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLDR2R0FBNHZHLENBQUM7UUFDendHLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFFOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLG9DQUFvQztRQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0E2Qk07UUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBd0JDO0lBRVQsQ0FBQztJQUVELG1GQUFtRjtJQUNuRix5Q0FBVyxHQUFYO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsV0FBVyxD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QjtHQXBCN0IsbUJBQW1CLENBNkovQjtBQTdKWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuL2NvbW1lbnRcIjtcclxuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tIFwidWkvdGV4dC12aWV3XCI7XHJcbmltcG9ydCB7IENvbW1lbnRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21tZW50LmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wb3N0LWRldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Bvc3QtZGV0YWlsLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0Jsb2dTZXJ2aWNlLCBDb21tZW50Q29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3REZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcG9zdDogT2JzZXJ2YWJsZTxQb3N0PjtcclxuICAgIHBvc3RzOiBBcnJheTxQb3N0PiBcclxuICAgIGNvbW1lbnRzOiBBcnJheTxDb21tZW50PiA9IFtdO1xyXG4gICAgZGF0YTogT2JzZXJ2YWJsZTxBcnJheTxQb3N0Pj47XHJcbiAgICB0aGVQb3N0OiBQb3N0O1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGJvZHk6IHN0cmluZztcclxuICAgIHNsdWc6IHN0cmluZztcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcGhyYXNlPSBcIlwiO1xyXG5cclxuICAgIEBJbnB1dCgpIGNvbW1lbnQ6IENvbW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgYmxvZ1NlcnZpY2U6IEJsb2dTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgY29tbWVudENvbXBvbmVudDogQ29tbWVudENvbXBvbmVudFxyXG5cclxuICAgIClcclxuICAgIHsvL3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9jb25zdCBzbHVnOiBzdHJpbmcgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcInNsdWdcIl07XHJcbiAgICAgICAgY29uc3Qgc2x1Zzogc3RyaW5nID0gXCJpb3QtYmVlci1yYXRpbmdcIjsgLy9oYXJkY29kZWQgc2x1ZyBzZWFyY2hcclxuICAgICAgICB0aGlzLnBvc3QgPSB0aGlzLmJsb2dTZXJ2aWNlLmdldFBvc3RCeVNsdWcoc2x1Zyk7XHJcblxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBcIklvVCBCZWVyIFJhdGluZ1wiO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IFwiVGhpcyBpcyByZWFsbHkgbW9yZSBvZiBhIGpvdXJuYWwgcG9zdCwgYnV0IGlmIHlvdSBhcmUgaW50ZXJlc3RlZCBpbiBhbnkgb2YgdGhlIHNlY3Rpb25zIGhlcmUsIGp1c3QgbGV0IG1lIGtub3cgYW5kIEknZCBiZSBoYXBweSB0byB0YWxrIGZ1cnRoZXIgYWJvdXQgaXQuXFxuXFxuQSBjby13b3JrZXIgaW4gbXkgZGF5IGpvYiB3YXMgd29ya2luZyBvbiBhIGRlbW8gZm9yIGEgZGV2LW9wcyBwcm9jZXNzIHRocm91Z2ggVmlzdWFsIFN0dWRpbyBUZWFtIFNlcnZpY2VzIGFuZCBBenVyZSBkZXBsb3ltZW50cy4gSGUgbmVlZGVkIGFuIGFwcGxpY2F0aW9uIHRvIGRlbW9uc3RyYXRlIHRoaXMgcHJvY2Vzcy4gSXQgZGlkbid0IG1hdHRlciB3aGF0IGl0IHdhcywgYnV0IEkgd2FzIHRvbGQgdGhhdCB0aGUgZXZlbnQgd291bGQgYmUgYXQgYSBCcmV3ZXJ5LiBXaXRoIHRoaXMga25vd2xlZGdlLCBJIGRlY2lkZWQgb24gYnVpbGRpbmcgYSBiZWVyIHJhdGluZyBJbnRlcm5ldCBvZiBUaGluZ3MgZGV2aWNlLlxcblxcbkkgaGF2ZSBiZWVuIGRhYmJsaW5nIGluIHRoZSBJbnRlcm5ldCBvZiBUaGluZ3Mgc3BhY2UgZm9yIGEgZmV3IG1vbnRocyBub3cuIEkgaGF2ZSBhIFJhc3BiZXJyeSBQaSAyIE1vZGVsIEIgdGhhdCBkcml2ZXMgbXkgM0QgcHJpbnRlci4gSSBoYXZlIGFsc28gYmVlbiB3b3JraW5nIG9uIGFuIGluc3RhbnQgcmVwbGF5IGZlYXR1cmUgZm9yIG15IGRheSBqb2IncyBmb29zYmFsbCB0YWJsZSB0aGF0IHVzZXMgYW5vdGhlciBSYXNwYmVycnkgUGkgMiBhbmQgYSBVU0IgY2FtZXJhLiBJIGFtIGZhbWlsaWFyIHdpdGggc29tZSBvZiB0aGUgY29uY2VwdHMgYnV0IEkgaGFkIG5ldmVyIHJlYWxseSBuZWVkZWQgdG8gZGl2ZSBkZWVwIGludG8gYW55IG9mIGl0LiBJIHZvbHVudGVlcmVkIHRvIHNwZW5kIG15IHRpbWUgY3JlYXRpbmcgdGhpcyBhcHBsaWNhdGlvbiBhbmQgSSB0aGluayBpdCB0dXJuZWQgb3V0IGdyZWF0LiBUaGlzIHBvc3QgZXhwbGFpbnMgZWFjaCBwYXJ0IGFuZCBzb21lIG9mIHRoZSBwcm9ibGVtcyBJIHJhbiBpbnRvIGFsb25nIHRoZSB3YXkuXFxuXFxuIVtGaW5pc2hlZCBQcm9kdWN0XShodHRwczovL2xzZWpjdy1ibjEzMDUuZmlsZXMuMWRydi5jb20veTNtVEw1RWY3eXhmb09pQkMyeDZsaC03T3M3VVFsbEFjQjJEOXB1Y2YyaFJWeEZ1dllGbmswei1feE1BVTdTWDBjNFpHM19qdlplT1RoeTFWazlaNW9oN2hjbmRCZmV4bkhBZFBCaXdzUF9FdEhhMGZENEVWaElmUldKNmhwOUZ4TGhYYmU3UWl1N0VRZzQwaElacmx3c3I0MkZ5V0NsdWdubXh1c0hZRy1LYkdNP3dpZHRoPTg2NCZoZWlnaHQ9NTc2JmNyb3Btb2RlPW5vbmUpXFxuXFxuQ29uY2VwdFxcbi0tLS0tXFxuVGhlIENvbHVtYnVzIEJyZXdpbmcgQ29tcGFueSB3aWxsIGhhdmUgdGVuIGRyYWZ0IGJlZXJzIHRoYXQgdGhlIGV2ZW50IGF0dGVuZGVlcyB3aWxsIGJlIHNhbXBsaW5nLiBUaGUgZ29hbCBpcyB0byBjcmVhdGUgYSBkZXZpY2Ugd2hlcmUgdGhlIGF0dGVuZGVlIGNhbiBwbGFjZSBhIGJlZXIgKG9yIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIGJlZXIpIG9uIGEgZGV2aWNlIGFuZCBiZSBhYmxlIHRvIHJhdGUgdGhhdCBiZWVyIGZyb20gMSB0byA1LiBUaGF0IHJhdGluZyBpcyB0aGVuIHNlbnQgdG8gTWljcm9zb2Z0IEF6dXJlIHNvIHRoYXQgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGFuZCByZXBvcnRpbmcgY2FuIGJlIGRvbmUgb24gdGhhdC4gVWx0aW1hdGVseSwgdGhlIGF0dGVuZGVlcyBuZWVkIHRvIGJlIGFibGUgdG8gc2VlIHRoZSByZXN1bHRzIG9mIHRob3NlIHJhdGluZ3Mgb24gYSB3ZWIgZGFzaGJvYXJkLiBcXG5cXG5JbmdyZWRpZW50c1xcbi0tLS0tLS0tXFxuLSBbMSBSYXNwYmVycnkgUGkgMiBNb2RlbCBCXShodHRwOi8vYW16bi5jb20vQjAwVDJVN1I3SSlcXG4tIFsxIEFyZHVpbm8gVW5vXShodHRwOi8vc3RvcmUtdXNhLmFyZHVpbm8uY2MvcHJvZHVjdHMvYTAwMDA2NilcXG4tIFs1IExFRCBBcmNhZGUgQnV0dG9ucyB3aXRoIG1pY3JvIHN3aXRjaGVzXShodHRwOi8vd3d3LnBhcmFkaXNlYXJjYWRlc2hvcC5jb20vcGFyYWRpc2UtbGVkLTI0LWsvNjc1LWdyZWVuLWJsYWNrLXJpbS1sZWQtcHVzaGJ1dHRvbi5odG1sIy92b2x0YWdlLTV2X3N1cGVyX2JyaWdodF9hY19kYy9taWNyb3N3aXRjaF9mb3JjZS01MF9ncmFtX21pY3Jvc3dpdGNoKVxcbi0gWzEwIE5GQyBUYWcgU3RpY2tlcnNdKGh0dHA6Ly9hbXpuLmNvbS9CMDEzWVFHRzE4KVxcbi0gNSAzMzAgb2htIHJlc2lzdG9yc1xcbi0gQnJlYWRib2FyZFxcbi0gW05YUCBPTTU1NzcvUE43MTIwIE5GQyBSZWFkZXJdKGh0dHA6Ly9hbXpuLmNvbS9CMDFCSlJDNDZBKVxcbi0gQWJvdXQgMC4yNWtnIEJsYWNrIFBMQSBwcmludGVyIGZpbGFtZW50XFxuLSBTb2xpZCBjb3JlIHdpcmVcXG5cXG5CdXR0b24gcHJlc3NlcyBhbmQgTEVEc1xcbi0tLS0tLS0tLS0tLS0tLS0tXFxuIVtCdXR0b24gTEVEc10oaHR0cHM6Ly95bWtrYWEtYm4xMzA1LmZpbGVzLjFkcnYuY29tL3kzbVpvSFFZWWhCaTFpYjlJZU0ydnhYZnZXdlgwRWVsM2loUnFqczd6S3RZNVhhLXFlMXQyd2hFeC1qX1BrYmc0TEFwTUozYnRRZTBkZXFhcUV3ZFIyZi01TWJZRENXWEw1R0dILWpHaEJ2N2gwUXFzREowWWpGMkFHbVdmczRlUW1sVUNlTnY4ekJSRTRhVWpOZkIyRkxvcHFfOHloUW5kV1JfaWZZSlhRelY1MD93aWR0aD02NjAmaGVpZ2h0PTM3MSZjcm9wbW9kZT1ub25lKVxcblRoZSBmdW5jdGlvbmFsaXR5IEkgd2FzIGxvb2tpbmcgZm9yIHdhcyB0byBoYXZlIGFsbCBmaXZlIExFRCBidXR0b25zIGxpZ2h0IHVwIHdoZW4gYSBiZWVyIGlzIHBsYWNlZCBvbiB0aGUgZGV2aWNlLiBUaGVuIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyBhIGJ1dHRvbiwgYWxsIG90aGVyIGJ1dHRvbnMgd2lsbCB0dXJuIG9mZiBhbmQgdGhlIHJhdGluZyB5b3Ugc2VsZWN0ZWQgd2lsbCBzdGF5IGxpdCB1bnRpbCB0aGUgYmVlciBpcyByZW1vdmVkLlxcblxcbktub3dpbmcgdGhhdCBJIG5lZWRlZCAxMSBpbnB1dHMgKDEgZm9yIGJlZXIgYXJyaXZlZC9kZXBhcnRlZCwgNSBmb3IgYnV0dG9uIHByZXNzZXMsIDUgZm9yIExFRHMpIGp1c3QgZm9yIHRoaXMgZnVuY3Rpb25hbGl0eSwgSSBrbmV3IEkgd291bGQgbm90IGhhdmUgZW5vdWdoIGlucHV0cyBvbiBvbmUgYm9hcmQuIEkgaGFkIGFuIEFyZHVpbm8gVW5vIGx5aW5nIGFyb3VuZCBzbyBJIGRlY2lkZWQgdG8gdXNlIHRoaXMgQXJkdWlubyBmb3IgdGhlIHNvbGUgcHVycG9zZSBvZiBtYW5hZ2luZyB0aGUgYnV0dG9ucyBhbmQgTEVEcy5cXG5cXG5UaGUgcHJvY2VzcyBvZiBnZXR0aW5nIGNvZGUgb24gdGhlIEFyZHVpbm8gaXMgZXh0cmVtZWx5IHNpbXBsZS4gSSBqdXN0IHN0YXJ0ZWQgdXBcIjtcclxuICAgICAgICB0aGlzLnNsdWcgPSBcImlvdC1iZWVyLXJhdGluZ1wiO1xyXG5cclxuICAgICAgICB0aGlzLmdldENvbW1lbnRzKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNvbW1lbnRzLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyp0aGlzLnBvc3Quc3Vic2NyaWJlKHg9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB0ZXN0ID0gbmV3IFBvc3QoeC50aXRsZSwgeC5ib2R5LCB4LnNsdWcpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHgudGl0bGUpKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4LmJvZHkpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoeC5zbHVnKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gSlNPTi5zdHJpbmdpZnkoeC50aXRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHguYm9keSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2x1ZyA9IEpTT04uc3RyaW5naWZ5KHguc2x1Zyk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5kYXRlID0gSlNPTi5wYXJzZSh4LmRhdGVDcmVhdGVkKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy50aXRsZSAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpdGxlIGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuYm9keSAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvZHkgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5zbHVnICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2x1ZyBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5kYXRlICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0ZSBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRlc3QudGl0bGUgPSB0aGlzLnRpdGxlO1xyXG4gICAgICAgICAgICB0ZXN0LmJvZHkgPSB0aGlzLmJvZHk7XHJcbiAgICAgICAgICAgIHRlc3Quc2x1ZyA9IHRoaXMuc2x1ZztcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLyppZih0eXBlb2YgdGVzdC50aXRsZSAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSB0ZXN0IHRpdGxlIGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mIHRlc3QuYm9keSAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSB0ZXN0IGJvZHkgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGVzdC5zbHVnICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIHRlc3Qgc2x1ZyBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRoZVBvc3QudGl0bGUgPSB0ZXN0LnRpdGxlOyAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudGhlUG9zdC5ib2R5ID0gdGVzdC5ib2R5O1xyXG4gICAgICAgICAgICB0aGlzLnRoZVBvc3Quc2x1ZyA9IHRlc3Quc2x1ZztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnRoZVBvc3QudGl0bGUgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgcG9zdCB0aXRsZSBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnRoZVBvc3QuYm9keSAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBwb3N0IGJvZHkgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy50aGVQb3N0LnNsdWcgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgcG9zdCBzbHVnIGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7Ki9cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9QdWxscyBhbGwgQ29tbWVudHMgZnJvbSB0aGUgYmxvZyBBUEkgYW5kIHN0b3JlcyBpdCBpbnRvIGEgY29tbWVudHMgYXJyYXk8Q29tbWVudD5cclxuICAgIGdldENvbW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0Q29tbWVudHModGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLmZvckVhY2goY29tbWVudD0+dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FkZHMgYSBDb21tZW50IG9iamVjdCBjcmVhdGVkIGZyb20gdXNlciBpbnB1dCB0byB0aGUgYmxvZyBBUElcclxuICAgIGFkZENvbW1lbnQoKSB7XHJcbiAgICAgICAgLy9DaGVja3MgdG8gbWFrZSBzdXJlIGEgY29tbWVudCB3ZW50IHRocm91Z2hcclxuICAgICAgICBpZiAoIXRoaXMucGhyYXNlKSB7IFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0IGZhaWxlZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vQ3JlYXRlcyBhIG5ldyBjb21tZW50IGFuZCBwb3N0cyB1c2luZyB0aGUgdXNlcidzIGluZm9ybWF0aW9uLlxyXG4gICAgICAgIC8vQ3VycmVudGx5IGhhcmRjb2RlZDogZW1haWwgYW5kIG5hbWUuIEd1aWQgY2FuIHN0YXkgc2luY2UgaXQncyBub3QgdXNlZC5cclxuICAgICAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgICAgIHRoaXMuY29tbWVudCA9IG5ldyBDb21tZW50KFwiMTIzNDU2NzgtOTEwMC1wb29wLWd1aWQtYW12ZXJ5bWF0dXJlXCIsIFwiYWJjQGdtYWlsLmNvbVwiLCB0aGlzLnBocmFzZSwgXCJKb2huXCIsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLnBvc3RDb21tZW50KHRoaXMuY29tbWVudCwgdGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50ID0+IHt0aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBjb21tZW50IHdhcyBwb3N0ZWQuIFJlZnJlc2ggdGhlIHBhZ2UgdG8gc2VlIHRoZSBjaGFuZ2VzLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDb21tZW50KGl0ZW06IENvbW1lbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uaWQpO1xyXG5cclxuICAgICAgICAvL0NoZWNrcyB0byBtYWtlIHN1cmUgYSBjb21tZW50IHdlbnQgdGhyb3VnaFxyXG4gICAgICAgIGlmICghaXRlbSkgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdCBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLy9DYWxscyBCbG9nU2VydmljZSB0byBkZWxldGUgdGhlIGNvbW1lbnRcclxuICAgICAgICB0aGlzLmJsb2dTZXJ2aWNlLmRlbGV0ZUNvbW1lbnQoaXRlbS5pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShjb21tZW50cz0+e1xyXG4gICAgICAgICAgICAgICAgY29tbWVudHMuZm9yRWFjaChjb21tZW50PT50aGlzLmNvbW1lbnRzLnB1c2goY29tbWVudCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgYWxlcnQoXCJZb3VyIGNvbW1lbnQgd2FzIGRlbGV0ZWQuIFJlZnJlc2ggdGhlIHBhZ2UgdG8gc2VlIHRoZSBjaGFuZ2VzLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0JhY2sgYnV0dG9uIHRvIHJldHVybiB0byBwcmV2aW91cyBwYWdlLlxyXG4gICAgcHVibGljIGdvQmFjaygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaGFyZSBidXR0b24gdG8gc2hhcmUgYSBibG9nIHRocm91Z2ggc29jaWFsIG1lZGlhLlxyXG4gICAgLy9OZWVkcyB0byBiZSBmaW5pc2hlZC5cclxuICAgIHB1YmxpYyBzaGFyZSgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgc2hhcmUgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1NhdmVzIHRoZSBibG9nIHBvc3QgdG8gdGhlIHVzZXIncyBib29rbWFya3MuXHJcbiAgICAvL05lZWRzIHRvIGJlIGZpbmlzaGVkLlxyXG4gICAgcHVibGljIGJvb2ttYXJrKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBib29rbWFyayBidXR0b24uXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0=
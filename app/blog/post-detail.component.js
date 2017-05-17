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
        this.phrase = "this is the comment that I've put in";
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
    PostDetailComponent.prototype.getComments = function () {
        var _this = this;
        this.blogService.getComments(this.slug)
            .subscribe(function (comments) {
            comments.forEach(function (comment) { return _this.comments.push(comment); });
        });
    };
    PostDetailComponent.prototype.addComment = function () {
        var _this = this;
        if (!this.phrase) {
            console.log("it failed");
            return;
        }
        this.comment = new comment_1.Comment("abc@gmail.com", this.phrase, "John");
        console.log("about to post");
        this.blogService.postComment(this.comment, this.slug)
            .subscribe(function (comment) {
            _this.comments.push(comment);
        });
    };
    PostDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    PostDetailComponent.prototype.share = function () {
        alert("You have pressed the share button.");
    };
    PostDetailComponent.prototype.bookmark = function () {
        alert("You have pressed the bookmark button.");
    };
    PostDetailComponent.prototype.testAdd = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBQ3pELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQUM5RCxxQ0FBb0M7QUFFcEMseURBQXVEO0FBVXZELElBQWEsbUJBQW1CO0lBYzVCLDZCQUNZLGdCQUFrQyxFQUNsQyxXQUF3QixFQUN4QixLQUFxQixFQUM3QixJQUFVLEVBQ1YsZ0JBQWtDO1FBSjFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFkakMsYUFBUSxHQUFtQixFQUFFLENBQUM7UUFPOUIsV0FBTSxHQUFFLHNDQUFzQyxDQUFDO0lBYy9DLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksMERBQTBEO1FBQzFELElBQU0sSUFBSSxHQUFXLGlCQUFpQixDQUFDLENBQUMsdUJBQXVCO1FBQy9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLDR2R0FBNHZHLENBQUM7UUFDendHLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFFOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLG9DQUFvQztRQUVwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0E2Qk07UUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBd0JDO0lBRVQsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUNuQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFFLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQUEsaUJBV0M7UUFWRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEQsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUFLLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNNLG1DQUFLLEdBQVo7UUFDSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sc0NBQVEsR0FBZjtRQUNJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTSxxQ0FBTyxHQUFkO0lBRUEsQ0FBQztJQUdMLDBCQUFDO0FBQUQsQ0FBQyxBQWxJRCxJQWtJQztBQXRIWTtJQUFSLFlBQUssRUFBRTs4QkFBVSxpQkFBTztvREFBQztBQVpqQixtQkFBbUI7SUFSL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsb0NBQWdCLENBQUM7S0FDN0MsQ0FBQztxQ0FpQmdDLHlCQUFnQjtRQUNyQiwwQkFBVztRQUNqQix1QkFBYztRQUN2QixXQUFJO1FBQ1Esb0NBQWdCO0dBbkI3QixtQkFBbUIsQ0FrSS9CO0FBbElZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHsgQmxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9ibG9nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSBcIi4vY29tbWVudFwiO1xyXG5pbXBvcnQgeyBUZXh0VmlldyB9IGZyb20gXCJ1aS90ZXh0LXZpZXdcIjtcclxuaW1wb3J0IHsgQ29tbWVudENvbXBvbmVudCB9IGZyb20gXCIuL2NvbW1lbnQuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcG9zdC1kZXRhaWwuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbQmxvZ1NlcnZpY2UsIENvbW1lbnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwb3N0OiBPYnNlcnZhYmxlPFBvc3Q+O1xyXG4gICAgcG9zdHM6IEFycmF5PFBvc3Q+IFxyXG4gICAgY29tbWVudHM6IEFycmF5PENvbW1lbnQ+ID0gW107XHJcbiAgICBkYXRhOiBPYnNlcnZhYmxlPEFycmF5PFBvc3Q+PjtcclxuICAgIHRoZVBvc3Q6IFBvc3Q7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYm9keTogc3RyaW5nO1xyXG4gICAgc2x1Zzogc3RyaW5nO1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIHBocmFzZT0gXCJ0aGlzIGlzIHRoZSBjb21tZW50IHRoYXQgSSd2ZSBwdXQgaW5cIjtcclxuXHJcbiAgICBASW5wdXQoKSBjb21tZW50OiBDb21tZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIGJsb2dTZXJ2aWNlOiBCbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwYWdlOiBQYWdlLFxyXG4gICAgICAgIGNvbW1lbnRDb21wb25lbnQ6IENvbW1lbnRDb21wb25lbnRcclxuXHJcbiAgICApXHJcbiAgICB7Ly9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vY29uc3Qgc2x1Zzogc3RyaW5nID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJzbHVnXCJdO1xyXG4gICAgICAgIGNvbnN0IHNsdWc6IHN0cmluZyA9IFwiaW90LWJlZXItcmF0aW5nXCI7IC8vaGFyZGNvZGVkIHNsdWcgc2VhcmNoXHJcbiAgICAgICAgdGhpcy5wb3N0ID0gdGhpcy5ibG9nU2VydmljZS5nZXRQb3N0QnlTbHVnKHNsdWcpO1xyXG5cclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJJb1QgQmVlciBSYXRpbmdcIjtcclxuICAgICAgICB0aGlzLmJvZHkgPSBcIlRoaXMgaXMgcmVhbGx5IG1vcmUgb2YgYSBqb3VybmFsIHBvc3QsIGJ1dCBpZiB5b3UgYXJlIGludGVyZXN0ZWQgaW4gYW55IG9mIHRoZSBzZWN0aW9ucyBoZXJlLCBqdXN0IGxldCBtZSBrbm93IGFuZCBJJ2QgYmUgaGFwcHkgdG8gdGFsayBmdXJ0aGVyIGFib3V0IGl0LlxcblxcbkEgY28td29ya2VyIGluIG15IGRheSBqb2Igd2FzIHdvcmtpbmcgb24gYSBkZW1vIGZvciBhIGRldi1vcHMgcHJvY2VzcyB0aHJvdWdoIFZpc3VhbCBTdHVkaW8gVGVhbSBTZXJ2aWNlcyBhbmQgQXp1cmUgZGVwbG95bWVudHMuIEhlIG5lZWRlZCBhbiBhcHBsaWNhdGlvbiB0byBkZW1vbnN0cmF0ZSB0aGlzIHByb2Nlc3MuIEl0IGRpZG4ndCBtYXR0ZXIgd2hhdCBpdCB3YXMsIGJ1dCBJIHdhcyB0b2xkIHRoYXQgdGhlIGV2ZW50IHdvdWxkIGJlIGF0IGEgQnJld2VyeS4gV2l0aCB0aGlzIGtub3dsZWRnZSwgSSBkZWNpZGVkIG9uIGJ1aWxkaW5nIGEgYmVlciByYXRpbmcgSW50ZXJuZXQgb2YgVGhpbmdzIGRldmljZS5cXG5cXG5JIGhhdmUgYmVlbiBkYWJibGluZyBpbiB0aGUgSW50ZXJuZXQgb2YgVGhpbmdzIHNwYWNlIGZvciBhIGZldyBtb250aHMgbm93LiBJIGhhdmUgYSBSYXNwYmVycnkgUGkgMiBNb2RlbCBCIHRoYXQgZHJpdmVzIG15IDNEIHByaW50ZXIuIEkgaGF2ZSBhbHNvIGJlZW4gd29ya2luZyBvbiBhbiBpbnN0YW50IHJlcGxheSBmZWF0dXJlIGZvciBteSBkYXkgam9iJ3MgZm9vc2JhbGwgdGFibGUgdGhhdCB1c2VzIGFub3RoZXIgUmFzcGJlcnJ5IFBpIDIgYW5kIGEgVVNCIGNhbWVyYS4gSSBhbSBmYW1pbGlhciB3aXRoIHNvbWUgb2YgdGhlIGNvbmNlcHRzIGJ1dCBJIGhhZCBuZXZlciByZWFsbHkgbmVlZGVkIHRvIGRpdmUgZGVlcCBpbnRvIGFueSBvZiBpdC4gSSB2b2x1bnRlZXJlZCB0byBzcGVuZCBteSB0aW1lIGNyZWF0aW5nIHRoaXMgYXBwbGljYXRpb24gYW5kIEkgdGhpbmsgaXQgdHVybmVkIG91dCBncmVhdC4gVGhpcyBwb3N0IGV4cGxhaW5zIGVhY2ggcGFydCBhbmQgc29tZSBvZiB0aGUgcHJvYmxlbXMgSSByYW4gaW50byBhbG9uZyB0aGUgd2F5LlxcblxcbiFbRmluaXNoZWQgUHJvZHVjdF0oaHR0cHM6Ly9sc2VqY3ctYm4xMzA1LmZpbGVzLjFkcnYuY29tL3kzbVRMNUVmN3l4Zm9PaUJDMng2bGgtN09zN1VRbGxBY0IyRDlwdWNmMmhSVnhGdXZZRm5rMHotX3hNQVU3U1gwYzRaRzNfanZaZU9UaHkxVms5WjVvaDdoY25kQmZleG5IQWRQQml3c1BfRXRIYTBmRDRFVmhJZlJXSjZocDlGeExoWGJlN1FpdTdFUWc0MGhJWnJsd3NyNDJGeVdDbHVnbm14dXNIWUctS2JHTT93aWR0aD04NjQmaGVpZ2h0PTU3NiZjcm9wbW9kZT1ub25lKVxcblxcbkNvbmNlcHRcXG4tLS0tLVxcblRoZSBDb2x1bWJ1cyBCcmV3aW5nIENvbXBhbnkgd2lsbCBoYXZlIHRlbiBkcmFmdCBiZWVycyB0aGF0IHRoZSBldmVudCBhdHRlbmRlZXMgd2lsbCBiZSBzYW1wbGluZy4gVGhlIGdvYWwgaXMgdG8gY3JlYXRlIGEgZGV2aWNlIHdoZXJlIHRoZSBhdHRlbmRlZSBjYW4gcGxhY2UgYSBiZWVyIChvciBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBiZWVyKSBvbiBhIGRldmljZSBhbmQgYmUgYWJsZSB0byByYXRlIHRoYXQgYmVlciBmcm9tIDEgdG8gNS4gVGhhdCByYXRpbmcgaXMgdGhlbiBzZW50IHRvIE1pY3Jvc29mdCBBenVyZSBzbyB0aGF0IGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBhbmQgcmVwb3J0aW5nIGNhbiBiZSBkb25lIG9uIHRoYXQuIFVsdGltYXRlbHksIHRoZSBhdHRlbmRlZXMgbmVlZCB0byBiZSBhYmxlIHRvIHNlZSB0aGUgcmVzdWx0cyBvZiB0aG9zZSByYXRpbmdzIG9uIGEgd2ViIGRhc2hib2FyZC4gXFxuXFxuSW5ncmVkaWVudHNcXG4tLS0tLS0tLVxcbi0gWzEgUmFzcGJlcnJ5IFBpIDIgTW9kZWwgQl0oaHR0cDovL2Ftem4uY29tL0IwMFQyVTdSN0kpXFxuLSBbMSBBcmR1aW5vIFVub10oaHR0cDovL3N0b3JlLXVzYS5hcmR1aW5vLmNjL3Byb2R1Y3RzL2EwMDAwNjYpXFxuLSBbNSBMRUQgQXJjYWRlIEJ1dHRvbnMgd2l0aCBtaWNybyBzd2l0Y2hlc10oaHR0cDovL3d3dy5wYXJhZGlzZWFyY2FkZXNob3AuY29tL3BhcmFkaXNlLWxlZC0yNC1rLzY3NS1ncmVlbi1ibGFjay1yaW0tbGVkLXB1c2hidXR0b24uaHRtbCMvdm9sdGFnZS01dl9zdXBlcl9icmlnaHRfYWNfZGMvbWljcm9zd2l0Y2hfZm9yY2UtNTBfZ3JhbV9taWNyb3N3aXRjaClcXG4tIFsxMCBORkMgVGFnIFN0aWNrZXJzXShodHRwOi8vYW16bi5jb20vQjAxM1lRR0cxOClcXG4tIDUgMzMwIG9obSByZXNpc3RvcnNcXG4tIEJyZWFkYm9hcmRcXG4tIFtOWFAgT001NTc3L1BONzEyMCBORkMgUmVhZGVyXShodHRwOi8vYW16bi5jb20vQjAxQkpSQzQ2QSlcXG4tIEFib3V0IDAuMjVrZyBCbGFjayBQTEEgcHJpbnRlciBmaWxhbWVudFxcbi0gU29saWQgY29yZSB3aXJlXFxuXFxuQnV0dG9uIHByZXNzZXMgYW5kIExFRHNcXG4tLS0tLS0tLS0tLS0tLS0tLVxcbiFbQnV0dG9uIExFRHNdKGh0dHBzOi8veW1ra2FhLWJuMTMwNS5maWxlcy4xZHJ2LmNvbS95M21ab0hRWVloQmkxaWI5SWVNMnZ4WGZ2V3ZYMEVlbDNpaFJxanM3ekt0WTVYYS1xZTF0MndoRXgtal9Qa2JnNExBcE1KM2J0UWUwZGVxYXFFd2RSMmYtNU1iWURDV1hMNUdHSC1qR2hCdjdoMFFxc0RKMFlqRjJBR21XZnM0ZVFtbFVDZU52OHpCUkU0YVVqTmZCMkZMb3BxXzh5aFFuZFdSX2lmWUpYUXpWNTA/d2lkdGg9NjYwJmhlaWdodD0zNzEmY3JvcG1vZGU9bm9uZSlcXG5UaGUgZnVuY3Rpb25hbGl0eSBJIHdhcyBsb29raW5nIGZvciB3YXMgdG8gaGF2ZSBhbGwgZml2ZSBMRUQgYnV0dG9ucyBsaWdodCB1cCB3aGVuIGEgYmVlciBpcyBwbGFjZWQgb24gdGhlIGRldmljZS4gVGhlbiB3aGVuIHRoZSB1c2VyIHByZXNzZXMgYSBidXR0b24sIGFsbCBvdGhlciBidXR0b25zIHdpbGwgdHVybiBvZmYgYW5kIHRoZSByYXRpbmcgeW91IHNlbGVjdGVkIHdpbGwgc3RheSBsaXQgdW50aWwgdGhlIGJlZXIgaXMgcmVtb3ZlZC5cXG5cXG5Lbm93aW5nIHRoYXQgSSBuZWVkZWQgMTEgaW5wdXRzICgxIGZvciBiZWVyIGFycml2ZWQvZGVwYXJ0ZWQsIDUgZm9yIGJ1dHRvbiBwcmVzc2VzLCA1IGZvciBMRURzKSBqdXN0IGZvciB0aGlzIGZ1bmN0aW9uYWxpdHksIEkga25ldyBJIHdvdWxkIG5vdCBoYXZlIGVub3VnaCBpbnB1dHMgb24gb25lIGJvYXJkLiBJIGhhZCBhbiBBcmR1aW5vIFVubyBseWluZyBhcm91bmQgc28gSSBkZWNpZGVkIHRvIHVzZSB0aGlzIEFyZHVpbm8gZm9yIHRoZSBzb2xlIHB1cnBvc2Ugb2YgbWFuYWdpbmcgdGhlIGJ1dHRvbnMgYW5kIExFRHMuXFxuXFxuVGhlIHByb2Nlc3Mgb2YgZ2V0dGluZyBjb2RlIG9uIHRoZSBBcmR1aW5vIGlzIGV4dHJlbWVseSBzaW1wbGUuIEkganVzdCBzdGFydGVkIHVwXCI7XHJcbiAgICAgICAgdGhpcy5zbHVnID0gXCJpb3QtYmVlci1yYXRpbmdcIjtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRDb21tZW50cygpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5jb21tZW50cy5sZW5ndGgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qdGhpcy5wb3N0LnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdGVzdCA9IG5ldyBQb3N0KHgudGl0bGUsIHguYm9keSwgeC5zbHVnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4LnRpdGxlKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoeC5ib2R5KSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHguc2x1ZykpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IEpTT04uc3RyaW5naWZ5KHgudGl0bGUpO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh4LmJvZHkpO1xyXG4gICAgICAgICAgICB0aGlzLnNsdWcgPSBKU09OLnN0cmluZ2lmeSh4LnNsdWcpO1xyXG4gICAgICAgICAgICAvL3RoaXMuZGF0ZSA9IEpTT04ucGFyc2UoeC5kYXRlQ3JlYXRlZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMudGl0bGUgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aXRsZSBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLmJvZHkgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib2R5IGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuc2x1ZyAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNsdWcgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuZGF0ZSAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGUgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXN0LnRpdGxlID0gdGhpcy50aXRsZTtcclxuICAgICAgICAgICAgdGVzdC5ib2R5ID0gdGhpcy5ib2R5O1xyXG4gICAgICAgICAgICB0ZXN0LnNsdWcgPSB0aGlzLnNsdWc7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIC8qaWYodHlwZW9mIHRlc3QudGl0bGUgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgdGVzdCB0aXRsZSBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0ZXN0LmJvZHkgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgdGVzdCBib2R5IGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mIHRlc3Quc2x1ZyAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSB0ZXN0IHNsdWcgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50aGVQb3N0LnRpdGxlID0gdGVzdC50aXRsZTsgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnRoZVBvc3QuYm9keSA9IHRlc3QuYm9keTtcclxuICAgICAgICAgICAgdGhpcy50aGVQb3N0LnNsdWcgPSB0ZXN0LnNsdWc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy50aGVQb3N0LnRpdGxlICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIHBvc3QgdGl0bGUgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy50aGVQb3N0LmJvZHkgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgcG9zdCBib2R5IGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMudGhlUG9zdC5zbHVnICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIHBvc3Qgc2x1ZyBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pOyovXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UuZ2V0Q29tbWVudHModGhpcy5zbHVnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnRzPT57XHJcbiAgICAgICAgICAgIGNvbW1lbnRzLmZvckVhY2goY29tbWVudD0+dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRDb21tZW50KCkge1xyXG4gICAgaWYgKCF0aGlzLnBocmFzZSkgeyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIml0IGZhaWxlZFwiKTtcclxuICAgICAgICByZXR1cm47IFxyXG4gICAgfVxyXG4gICAgdGhpcy5jb21tZW50ID0gbmV3IENvbW1lbnQoXCJhYmNAZ21haWwuY29tXCIsIHRoaXMucGhyYXNlLCBcIkpvaG5cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhYm91dCB0byBwb3N0XCIpO1xyXG4gICAgICAgIHRoaXMuYmxvZ1NlcnZpY2UucG9zdENvbW1lbnQodGhpcy5jb21tZW50LCB0aGlzLnNsdWcpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoY29tbWVudCA9PiB7dGhpcy5jb21tZW50cy5wdXNoKGNvbW1lbnQpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb0JhY2soKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNoYXJlKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBzaGFyZSBidXR0b24uXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGJvb2ttYXJrKCl7XHJcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBwcmVzc2VkIHRoZSBib29rbWFyayBidXR0b24uXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRlc3RBZGQoKXtcclxuIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufSJdfQ==
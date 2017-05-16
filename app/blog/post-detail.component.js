"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var blog_service_1 = require("./blog.service");
var router_2 = require("nativescript-angular/router");
var PostDetailComponent = (function () {
    function PostDetailComponent(routerExtensions, blogService, route, page) {
        this.routerExtensions = routerExtensions;
        this.blogService = blogService;
        this.route = route;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        //const slug: string = this.route.snapshot.params["slug"];
        var slug = "iot-beer-rating"; //hardcoded slug search
        this.post = this.blogService.getPostBySlug(slug);
        this.title = "IoT Beer Rating";
        this.body = "This is really more of a journal post, but if you are interested in any of the sections here, just let me know and I'd be happy to talk further about it.\n\nA co-worker in my day job was working on a demo for a dev-ops process through Visual Studio Team Services and Azure deployments. He needed an application to demonstrate this process. It didn't matter what it was, but I was told that the event would be at a Brewery. With this knowledge, I decided on building a beer rating Internet of Things device.\n\nI have been dabbling in the Internet of Things space for a few months now. I have a Raspberry Pi 2 Model B that drives my 3D printer. I have also been working on an instant replay feature for my day job's foosball table that uses another Raspberry Pi 2 and a USB camera. I am familiar with some of the concepts but I had never really needed to dive deep into any of it. I volunteered to spend my time creating this application and I think it turned out great. This post explains each part and some of the problems I ran into along the way.\n\n![Finished Product](https://lsejcw-bn1305.files.1drv.com/y3mTL5Ef7yxfoOiBC2x6lh-7Os7UQllAcB2D9pucf2hRVxFuvYFnk0z-_xMAU7SX0c4ZG3_jvZeOThy1Vk9Z5oh7hcndBfexnHAdPBiwsP_EtHa0fD4EVhIfRWJ6hp9FxLhXbe7Qiu7EQg40hIZrlwsr42FyWClugnmxusHYG-KbGM?width=864&height=576&cropmode=none)\n\nConcept\n-----\nThe Columbus Brewing Company will have ten draft beers that the event attendees will be sampling. The goal is to create a device where the attendee can place a beer (or a representation of the beer) on a device and be able to rate that beer from 1 to 5. That rating is then sent to Microsoft Azure so that additional processing and reporting can be done on that. Ultimately, the attendees need to be able to see the results of those ratings on a web dashboard. \n\nIngredients\n--------\n- [1 Raspberry Pi 2 Model B](http://amzn.com/B00T2U7R7I)\n- [1 Arduino Uno](http://store-usa.arduino.cc/products/a000066)\n- [5 LED Arcade Buttons with micro switches](http://www.paradisearcadeshop.com/paradise-led-24-k/675-green-black-rim-led-pushbutton.html#/voltage-5v_super_bright_ac_dc/microswitch_force-50_gram_microswitch)\n- [10 NFC Tag Stickers](http://amzn.com/B013YQGG18)\n- 5 330 ohm resistors\n- Breadboard\n- [NXP OM5577/PN7120 NFC Reader](http://amzn.com/B01BJRC46A)\n- About 0.25kg Black PLA printer filament\n- Solid core wire\n\nButton presses and LEDs\n-----------------\n![Button LEDs](https://ymkkaa-bn1305.files.1drv.com/y3mZoHQYYhBi1ib9IeM2vxXfvWvX0Eel3ihRqjs7zKtY5Xa-qe1t2whEx-j_Pkbg4LApMJ3btQe0deqaqEwdR2f-5MbYDCWXL5GGH-jGhBv7h0QqsDJ0YjF2AGmWfs4eQmlUCeNv8zBRE4aUjNfB2FLopq_8yhQndWR_ifYJXQzV50?width=660&height=371&cropmode=none)\nThe functionality I was looking for was to have all five LED buttons light up when a beer is placed on the device. Then when the user presses a button, all other buttons will turn off and the rating you selected will stay lit until the beer is removed.\n\nKnowing that I needed 11 inputs (1 for beer arrived/departed, 5 for button presses, 5 for LEDs) just for this functionality, I knew I would not have enough inputs on one board. I had an Arduino Uno lying around so I decided to use this Arduino for the sole purpose of managing the buttons and LEDs.\n\nThe process of getting code on the Arduino is extremely simple. I just started up";
        this.slug = "iot-beer-rating";
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
    PostDetailComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    PostDetailComponent.prototype.share = function () {
        alert("You have pressed the share button.");
    };
    PostDetailComponent.prototype.bookmark = function () {
        alert("You have pressed the bookmark button.");
    };
    return PostDetailComponent;
}());
PostDetailComponent = __decorate([
    core_1.Component({
        selector: "ns-details",
        moduleId: module.id,
        templateUrl: "./post-detail.component.html",
        styleUrls: ["./post-detail.css"],
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        blog_service_1.BlogService,
        router_1.ActivatedRoute,
        page_1.Page])
], PostDetailComponent);
exports.PostDetailComponent = PostDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUdqRCxnQ0FBK0I7QUFFL0IsK0NBQTZDO0FBQzdDLHNEQUE4RDtBQVU5RCxJQUFhLG1CQUFtQjtJQVc1Qiw2QkFDWSxnQkFBa0MsRUFDbEMsV0FBd0IsRUFDeEIsS0FBcUIsRUFDN0IsSUFBVTtRQUhGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7SUFJakMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSwwREFBMEQ7UUFDMUQsSUFBTSxJQUFJLEdBQVcsaUJBQWlCLENBQUMsQ0FBQyx1QkFBdUI7UUFDL0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsNHZHQUE0dkcsQ0FBQztRQUN6d0csSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUU5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0E2Qk07UUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBd0JDO0lBRVQsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNNLG1DQUFLLEdBQVo7UUFDSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sc0NBQVEsR0FBZjtRQUNJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTCwwQkFBQztBQUFELENBQUMsQUFqR0QsSUFpR0M7QUFqR1ksbUJBQW1CO0lBUC9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUNuQyxDQUFDO3FDQWNnQyx5QkFBZ0I7UUFDckIsMEJBQVc7UUFDakIsdUJBQWM7UUFDdkIsV0FBSTtHQWZMLG1CQUFtQixDQWlHL0I7QUFqR1ksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB7IEJsb2dTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gXCIuL2NvbW1lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtZGV0YWlsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcG9zdC1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wb3N0LWRldGFpbC5jc3NcIl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwb3N0OiBPYnNlcnZhYmxlPFBvc3Q+O1xyXG4gICAgcG9zdHM6IEFycmF5PFBvc3Q+IFxyXG4gICAgY29tbWVudHM6IEFycmF5PENvbW1lbnQ+XHJcbiAgICBkYXRhOiBPYnNlcnZhYmxlPEFycmF5PFBvc3Q+PjtcclxuICAgIHRoZVBvc3Q6IFBvc3Q7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYm9keTogc3RyaW5nO1xyXG4gICAgc2x1Zzogc3RyaW5nO1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBibG9nU2VydmljZTogQmxvZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcGFnZTogUGFnZVxyXG4gICAgKVxyXG4gICAgey8vcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vY29uc3Qgc2x1Zzogc3RyaW5nID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJzbHVnXCJdO1xyXG4gICAgICAgIGNvbnN0IHNsdWc6IHN0cmluZyA9IFwiaW90LWJlZXItcmF0aW5nXCI7IC8vaGFyZGNvZGVkIHNsdWcgc2VhcmNoXHJcbiAgICAgICAgdGhpcy5wb3N0ID0gdGhpcy5ibG9nU2VydmljZS5nZXRQb3N0QnlTbHVnKHNsdWcpO1xyXG5cclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJJb1QgQmVlciBSYXRpbmdcIjtcclxuICAgICAgICB0aGlzLmJvZHkgPSBcIlRoaXMgaXMgcmVhbGx5IG1vcmUgb2YgYSBqb3VybmFsIHBvc3QsIGJ1dCBpZiB5b3UgYXJlIGludGVyZXN0ZWQgaW4gYW55IG9mIHRoZSBzZWN0aW9ucyBoZXJlLCBqdXN0IGxldCBtZSBrbm93IGFuZCBJJ2QgYmUgaGFwcHkgdG8gdGFsayBmdXJ0aGVyIGFib3V0IGl0LlxcblxcbkEgY28td29ya2VyIGluIG15IGRheSBqb2Igd2FzIHdvcmtpbmcgb24gYSBkZW1vIGZvciBhIGRldi1vcHMgcHJvY2VzcyB0aHJvdWdoIFZpc3VhbCBTdHVkaW8gVGVhbSBTZXJ2aWNlcyBhbmQgQXp1cmUgZGVwbG95bWVudHMuIEhlIG5lZWRlZCBhbiBhcHBsaWNhdGlvbiB0byBkZW1vbnN0cmF0ZSB0aGlzIHByb2Nlc3MuIEl0IGRpZG4ndCBtYXR0ZXIgd2hhdCBpdCB3YXMsIGJ1dCBJIHdhcyB0b2xkIHRoYXQgdGhlIGV2ZW50IHdvdWxkIGJlIGF0IGEgQnJld2VyeS4gV2l0aCB0aGlzIGtub3dsZWRnZSwgSSBkZWNpZGVkIG9uIGJ1aWxkaW5nIGEgYmVlciByYXRpbmcgSW50ZXJuZXQgb2YgVGhpbmdzIGRldmljZS5cXG5cXG5JIGhhdmUgYmVlbiBkYWJibGluZyBpbiB0aGUgSW50ZXJuZXQgb2YgVGhpbmdzIHNwYWNlIGZvciBhIGZldyBtb250aHMgbm93LiBJIGhhdmUgYSBSYXNwYmVycnkgUGkgMiBNb2RlbCBCIHRoYXQgZHJpdmVzIG15IDNEIHByaW50ZXIuIEkgaGF2ZSBhbHNvIGJlZW4gd29ya2luZyBvbiBhbiBpbnN0YW50IHJlcGxheSBmZWF0dXJlIGZvciBteSBkYXkgam9iJ3MgZm9vc2JhbGwgdGFibGUgdGhhdCB1c2VzIGFub3RoZXIgUmFzcGJlcnJ5IFBpIDIgYW5kIGEgVVNCIGNhbWVyYS4gSSBhbSBmYW1pbGlhciB3aXRoIHNvbWUgb2YgdGhlIGNvbmNlcHRzIGJ1dCBJIGhhZCBuZXZlciByZWFsbHkgbmVlZGVkIHRvIGRpdmUgZGVlcCBpbnRvIGFueSBvZiBpdC4gSSB2b2x1bnRlZXJlZCB0byBzcGVuZCBteSB0aW1lIGNyZWF0aW5nIHRoaXMgYXBwbGljYXRpb24gYW5kIEkgdGhpbmsgaXQgdHVybmVkIG91dCBncmVhdC4gVGhpcyBwb3N0IGV4cGxhaW5zIGVhY2ggcGFydCBhbmQgc29tZSBvZiB0aGUgcHJvYmxlbXMgSSByYW4gaW50byBhbG9uZyB0aGUgd2F5LlxcblxcbiFbRmluaXNoZWQgUHJvZHVjdF0oaHR0cHM6Ly9sc2VqY3ctYm4xMzA1LmZpbGVzLjFkcnYuY29tL3kzbVRMNUVmN3l4Zm9PaUJDMng2bGgtN09zN1VRbGxBY0IyRDlwdWNmMmhSVnhGdXZZRm5rMHotX3hNQVU3U1gwYzRaRzNfanZaZU9UaHkxVms5WjVvaDdoY25kQmZleG5IQWRQQml3c1BfRXRIYTBmRDRFVmhJZlJXSjZocDlGeExoWGJlN1FpdTdFUWc0MGhJWnJsd3NyNDJGeVdDbHVnbm14dXNIWUctS2JHTT93aWR0aD04NjQmaGVpZ2h0PTU3NiZjcm9wbW9kZT1ub25lKVxcblxcbkNvbmNlcHRcXG4tLS0tLVxcblRoZSBDb2x1bWJ1cyBCcmV3aW5nIENvbXBhbnkgd2lsbCBoYXZlIHRlbiBkcmFmdCBiZWVycyB0aGF0IHRoZSBldmVudCBhdHRlbmRlZXMgd2lsbCBiZSBzYW1wbGluZy4gVGhlIGdvYWwgaXMgdG8gY3JlYXRlIGEgZGV2aWNlIHdoZXJlIHRoZSBhdHRlbmRlZSBjYW4gcGxhY2UgYSBiZWVyIChvciBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBiZWVyKSBvbiBhIGRldmljZSBhbmQgYmUgYWJsZSB0byByYXRlIHRoYXQgYmVlciBmcm9tIDEgdG8gNS4gVGhhdCByYXRpbmcgaXMgdGhlbiBzZW50IHRvIE1pY3Jvc29mdCBBenVyZSBzbyB0aGF0IGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBhbmQgcmVwb3J0aW5nIGNhbiBiZSBkb25lIG9uIHRoYXQuIFVsdGltYXRlbHksIHRoZSBhdHRlbmRlZXMgbmVlZCB0byBiZSBhYmxlIHRvIHNlZSB0aGUgcmVzdWx0cyBvZiB0aG9zZSByYXRpbmdzIG9uIGEgd2ViIGRhc2hib2FyZC4gXFxuXFxuSW5ncmVkaWVudHNcXG4tLS0tLS0tLVxcbi0gWzEgUmFzcGJlcnJ5IFBpIDIgTW9kZWwgQl0oaHR0cDovL2Ftem4uY29tL0IwMFQyVTdSN0kpXFxuLSBbMSBBcmR1aW5vIFVub10oaHR0cDovL3N0b3JlLXVzYS5hcmR1aW5vLmNjL3Byb2R1Y3RzL2EwMDAwNjYpXFxuLSBbNSBMRUQgQXJjYWRlIEJ1dHRvbnMgd2l0aCBtaWNybyBzd2l0Y2hlc10oaHR0cDovL3d3dy5wYXJhZGlzZWFyY2FkZXNob3AuY29tL3BhcmFkaXNlLWxlZC0yNC1rLzY3NS1ncmVlbi1ibGFjay1yaW0tbGVkLXB1c2hidXR0b24uaHRtbCMvdm9sdGFnZS01dl9zdXBlcl9icmlnaHRfYWNfZGMvbWljcm9zd2l0Y2hfZm9yY2UtNTBfZ3JhbV9taWNyb3N3aXRjaClcXG4tIFsxMCBORkMgVGFnIFN0aWNrZXJzXShodHRwOi8vYW16bi5jb20vQjAxM1lRR0cxOClcXG4tIDUgMzMwIG9obSByZXNpc3RvcnNcXG4tIEJyZWFkYm9hcmRcXG4tIFtOWFAgT001NTc3L1BONzEyMCBORkMgUmVhZGVyXShodHRwOi8vYW16bi5jb20vQjAxQkpSQzQ2QSlcXG4tIEFib3V0IDAuMjVrZyBCbGFjayBQTEEgcHJpbnRlciBmaWxhbWVudFxcbi0gU29saWQgY29yZSB3aXJlXFxuXFxuQnV0dG9uIHByZXNzZXMgYW5kIExFRHNcXG4tLS0tLS0tLS0tLS0tLS0tLVxcbiFbQnV0dG9uIExFRHNdKGh0dHBzOi8veW1ra2FhLWJuMTMwNS5maWxlcy4xZHJ2LmNvbS95M21ab0hRWVloQmkxaWI5SWVNMnZ4WGZ2V3ZYMEVlbDNpaFJxanM3ekt0WTVYYS1xZTF0MndoRXgtal9Qa2JnNExBcE1KM2J0UWUwZGVxYXFFd2RSMmYtNU1iWURDV1hMNUdHSC1qR2hCdjdoMFFxc0RKMFlqRjJBR21XZnM0ZVFtbFVDZU52OHpCUkU0YVVqTmZCMkZMb3BxXzh5aFFuZFdSX2lmWUpYUXpWNTA/d2lkdGg9NjYwJmhlaWdodD0zNzEmY3JvcG1vZGU9bm9uZSlcXG5UaGUgZnVuY3Rpb25hbGl0eSBJIHdhcyBsb29raW5nIGZvciB3YXMgdG8gaGF2ZSBhbGwgZml2ZSBMRUQgYnV0dG9ucyBsaWdodCB1cCB3aGVuIGEgYmVlciBpcyBwbGFjZWQgb24gdGhlIGRldmljZS4gVGhlbiB3aGVuIHRoZSB1c2VyIHByZXNzZXMgYSBidXR0b24sIGFsbCBvdGhlciBidXR0b25zIHdpbGwgdHVybiBvZmYgYW5kIHRoZSByYXRpbmcgeW91IHNlbGVjdGVkIHdpbGwgc3RheSBsaXQgdW50aWwgdGhlIGJlZXIgaXMgcmVtb3ZlZC5cXG5cXG5Lbm93aW5nIHRoYXQgSSBuZWVkZWQgMTEgaW5wdXRzICgxIGZvciBiZWVyIGFycml2ZWQvZGVwYXJ0ZWQsIDUgZm9yIGJ1dHRvbiBwcmVzc2VzLCA1IGZvciBMRURzKSBqdXN0IGZvciB0aGlzIGZ1bmN0aW9uYWxpdHksIEkga25ldyBJIHdvdWxkIG5vdCBoYXZlIGVub3VnaCBpbnB1dHMgb24gb25lIGJvYXJkLiBJIGhhZCBhbiBBcmR1aW5vIFVubyBseWluZyBhcm91bmQgc28gSSBkZWNpZGVkIHRvIHVzZSB0aGlzIEFyZHVpbm8gZm9yIHRoZSBzb2xlIHB1cnBvc2Ugb2YgbWFuYWdpbmcgdGhlIGJ1dHRvbnMgYW5kIExFRHMuXFxuXFxuVGhlIHByb2Nlc3Mgb2YgZ2V0dGluZyBjb2RlIG9uIHRoZSBBcmR1aW5vIGlzIGV4dHJlbWVseSBzaW1wbGUuIEkganVzdCBzdGFydGVkIHVwXCI7XHJcbiAgICAgICAgdGhpcy5zbHVnID0gXCJpb3QtYmVlci1yYXRpbmdcIjtcclxuICAgICAgICBcclxuICAgICAgICAvKnRoaXMucG9zdC5zdWJzY3JpYmUoeD0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHRlc3QgPSBuZXcgUG9zdCh4LnRpdGxlLCB4LmJvZHksIHguc2x1ZylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoeC50aXRsZSkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHguYm9keSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4LnNsdWcpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBKU09OLnN0cmluZ2lmeSh4LnRpdGxlKTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeC5ib2R5KTtcclxuICAgICAgICAgICAgdGhpcy5zbHVnID0gSlNPTi5zdHJpbmdpZnkoeC5zbHVnKTtcclxuICAgICAgICAgICAgLy90aGlzLmRhdGUgPSBKU09OLnBhcnNlKHguZGF0ZUNyZWF0ZWQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnRpdGxlICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGl0bGUgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2R5ICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9keSBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnNsdWcgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzbHVnIGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLmRhdGUgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRlIGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVzdC50aXRsZSA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgICAgIHRlc3QuYm9keSA9IHRoaXMuYm9keTtcclxuICAgICAgICAgICAgdGVzdC5zbHVnID0gdGhpcy5zbHVnO1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAvKmlmKHR5cGVvZiB0ZXN0LnRpdGxlICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIHRlc3QgdGl0bGUgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0eXBlb2YgdGVzdC5ib2R5ICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIHRlc3QgYm9keSBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0ZXN0LnNsdWcgIT09J3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgdGVzdCBzbHVnIGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudGhlUG9zdC50aXRsZSA9IHRlc3QudGl0bGU7ICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy50aGVQb3N0LmJvZHkgPSB0ZXN0LmJvZHk7XHJcbiAgICAgICAgICAgIHRoaXMudGhlUG9zdC5zbHVnID0gdGVzdC5zbHVnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMudGhlUG9zdC50aXRsZSAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBwb3N0IHRpdGxlIGlzIGRlZmluZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMudGhlUG9zdC5ib2R5ICE9PSd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhlIHBvc3QgYm9keSBpcyBkZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnRoZVBvc3Quc2x1ZyAhPT0ndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoZSBwb3N0IHNsdWcgaXMgZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTsqL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29CYWNrKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzaGFyZSgpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgc2hhcmUgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBib29rbWFyaygpe1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IGhhdmUgcHJlc3NlZCB0aGUgYm9va21hcmsgYnV0dG9uLlwiKTtcclxuICAgIH1cclxuICAgIFxyXG59Il19
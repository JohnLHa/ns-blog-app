import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Observable} from 'rxjs/Observable';

import { Page } from "ui/page";
import { Post } from "./post";
import { BlogService } from "./blog.service";
import { RouterExtensions} from "nativescript-angular/router";
import { Comment } from "./comment";
import { TextView } from "ui/text-view";
import { CommentComponent } from "./comment.component";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./post-detail.component.html",
    styleUrls: ["./post-detail.css"],
    providers: [BlogService, CommentComponent]
})

export class PostDetailComponent implements OnInit {
    post: Observable<Post>;
    posts: Array<Post> 
    comments: Array<Comment> = [];
    data: Observable<Array<Post>>;
    thePost: Post;
    title: string;
    body: string;
    slug: string;
    date: Date;
    id: string;
    phrase= "";

    @Input() comment: Comment;

    constructor(
        private routerExtensions: RouterExtensions,
        private blogService: BlogService,
        private route: ActivatedRoute,
        page: Page,
        commentComponent: CommentComponent

    )
    {//page.actionBarHidden = true;

    }

    ngOnInit(): void {
        //const slug: string = this.route.snapshot.params["slug"];
        const slug: string = "iot-beer-rating"; //hardcoded slug search
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

    }

    //Pulls all Comments from the blog API and stores it into a comments array<Comment>
    getComments() {
        this.blogService.getComments(this.slug)
            .subscribe(comments=>{
            comments.forEach(comment=>this.comments.push(comment))
        });
    }
    
    //Adds a Comment object created from user input to the blog API
    addComment() {
        //Checks to make sure a comment went through
        if (!this.phrase) { 
            console.log("it failed");
            return; 
        }

        //Creates a new comment and posts using the user's information.
        //Currently hardcoded: email and name. Guid can stay since it's not used.
        //Needs to be finished.
        this.comment = new Comment("12345678-9100-poop-guid-amverymature", "abc@gmail.com", this.phrase, "John", new Date());
            this.blogService.postComment(this.comment, this.slug)
                .subscribe(comment => {this.comments.push(comment)
            });
            alert("Your comment was posted. Refresh the page to see the changes.");
    }

    deleteComment(item: Comment){
        console.log(item.id);

        //Checks to make sure a comment went through
        if (!item) { 
            console.log("it failed");
            return; 
        } 

        //Calls BlogService to delete the comment
        this.blogService.deleteComment(item.id)
            .subscribe(comments=>{
                comments.forEach(comment=>this.comments.push(comment))
            })
        alert("Your comment was deleted. Refresh the page to see the changes.");
    }

    //Back button to return to previous page.
    public goBack(){
        this.routerExtensions.back();
    }

    //Share button to share a blog through social media.
    //Needs to be finished.
    public share(){
        alert("You have pressed the share button.");
    }

    //Saves the blog post to the user's bookmarks.
    //Needs to be finished.
    public bookmark(){
        alert("You have pressed the bookmark button.");
    }
    
}
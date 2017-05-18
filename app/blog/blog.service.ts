import { Injectable } from "@angular/core"
import { Http, Headers, Response } from "@angular/http"
import { Observable } from "rxjs/Rx";
import { Config } from "../Config"
import 'rxjs/add/operator/filter';
import { Post } from "./post"
import { Comment } from "./comment"


@Injectable()
export class BlogService {
    title = "";
    body = "";
    slug = "";
    post = new Post(this.title, this.body, this.slug);
    constructor(private http: Http) {}

    posts() {
        let headers = new Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config.apiKey);
        
        var result =  this.http.get(Config.apiUrl + "Posts", { headers: headers})
            .map(res=>res.json())
            .map(data=>{
                let posts = new Array<Post>();
                data.forEach((post) => {
                    posts.push(new Post(post.title, post.body, post.slug))
                });
                return posts;
            }).catch(this.handleErrors)
            ;

        return result;
    }

    handleErrors(error, caught) {
        console.log(JSON.stringify(error));
        return Observable.throw(error);
    }

    getPostBySlug(slug: string) {
	    let headers = new Headers();
	    headers.append("Ocp-Apim-Subscription-Key", Config.apiKey);
        console.log(Config.postUrl + slug);
	    return this.http.get(Config.postUrl + slug, { headers: headers})
	        .map(res => res.json());
            
            // .do(x => console.log(x))
	        // .map(data=> {
            //     let post = new Post(data.title, data.body, data.slug);
            //     post.tags = data.tags;
            //     return post;
	        // })   .catch(this.handleErrors)

	    }
    postComment(comment: Comment, slug: string){
        let headers = new Headers();
	    headers.append("Content-Type", "application/json");
        console.log(Config.createCommentUrl + slug);

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

        return this.http.post(Config.createCommentUrl + slug,
            JSON.stringify({
            "Email": "abc@lop.com",
            "Message": "This is a hardcoded message",
            "Name": "John"
        }), 
            { headers: headers})
            .map(res => res.json())
            .catch(this.handleErrors)
    }
    
    getComments(slug: string){
        let headers = new Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config.apiKey);
        
        var result =  this.http.get(Config.getAllCommentsUrl + slug, { headers: headers})
            .map(res=>res.json())
            .map(data=>{
                let comments = new Array<Comment>();
                data.forEach((comment) => {
                    comments.push(new Comment(comment.email, comment.message, comment.user))
                });
                return comments;
            }).catch(this.handleErrors)
            ;

        return result;

    }

}
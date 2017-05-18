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

    //Pulls the Posts from the Blog API and returns the array of Posts to the post component
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

    //Reports the error for any of the data being pulled or pushed from/to the Blog API
    handleErrors(error, caught) {
        console.log(JSON.stringify(error));
        return Observable.throw(error);
    }

    //Pulls a Post by slug to open up and read
    //Needs to be fixed like how comments are chosen by the delete function
    getPostBySlug(slug: string) {
	    let headers = new Headers();
	    headers.append("Ocp-Apim-Subscription-Key", Config.apiKey);
        console.log(Config.postUrl + slug);
	    return this.http.get(Config.postUrl + slug, { headers: headers})
	        .map(res => res.json());

	}

    //Posts a Comment to the Blog API to be posted.
    postComment(comment: Comment, slug: string){
        let headers = new Headers();
	    headers.append("Content-Type", "application/json");

        return this.http.post(Config.createCommentUrl + slug,
            JSON.stringify({
            "Email": comment.email,
            "Message": comment.message,
            "Name": comment.name
        }), 
            { headers: headers})
            .map(res => res.json())
            .catch(this.handleErrors)
    }
    
    //Gets all comments for a blog post and stores them in a Comment array 
    getComments(slug: string){
        let headers = new Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config.apiKey);
        
        var result =  this.http.get(Config.getAllCommentsUrl + slug, { headers: headers})
            .map(res=>res.json())
            .map(data=>{
                let comments = new Array<Comment>();
                data.forEach((comment) => {
                    comments.push(new Comment(comment.id, comment.email, comment.message, comment.user, comment.dateCreated))
                });
                return comments;
            }).catch(this.handleErrors)
            ;

        return result;

    }

    //Gets an id of type GUID and deletes it from the Blog API
    deleteComment(id: string){
        let headers = new Headers();
	    headers.append("Content-Type", "application/json");

        console.log("about to delete this sucka");
        return this.http.delete(Config.deleteCommentUrl + id)
            .map(res => res.json())
            .catch(this.handleErrors);
    }
    

}
import { Injectable } from "@angular/core"
import { Http, Headers, Response } from "@angular/http"
import { Observable } from "rxjs/Rx";
import { Config } from "../Config"
import 'rxjs/add/operator/filter';
import { Post } from "./post"


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
	    headers.append("Ocp-Apim-Subscription-Key", Config.apiKey);;
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

}
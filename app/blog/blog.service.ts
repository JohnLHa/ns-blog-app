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

    //attempt to return a Post object rather than and Observable wrapping a Post
    getPostBySlug(slug: string) {
        let headers = new Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config.apiKey);

        var result =  this.http.get(Config.postUrl + slug, { headers: headers})
            .map((res: Response) => {
                this.post.title = res.json().title;
                this.post.body = res.json().body;
                this.post.slug = res.json().slug;
            } ).catch(this.handleErrors);
            
            return this.post;
    }

    //attempt to follow the format given
    getPostBySlug(slug: string) {
        let headers = new Headers();
        headers.append("Ocp-Apim-Subscription-Key", Config.apiKey);

        var result =  this.http.get(Config.postUrl + slug, { headers: headers})
            .map(res => res.json()
            .map(data=> {
                post => new Post();//would need initializers though
                //not exactly sure on the syntax
            })
            return result;
    }
}
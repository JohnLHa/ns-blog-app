export class Config {
    //static apiUrl: string = "http://blogapidemo.azurewebsites.net/api/"
    static apiUrl: string = "http://192.168.1.170:5000/api/"
    static postUrl: string= Config.apiUrl + "post/"
    static createCommentUrl: string= Config.apiUrl + "Comment/"
    static getAllCommentsUrl: string= Config.apiUrl + "comments/"
    static deleteCommentUrl: string= Config.apiUrl + "comment/"
    static apiKey: string = "";
}
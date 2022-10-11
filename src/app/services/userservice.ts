import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoggerService } from "./loggerService";


@Injectable( )

//Api Call Get Method

export class UserService {
    constructor(private  http:HttpClient){
    }

    getData(){
        let url='https://jsonplaceholder.typicode.com/todos';
        return this.http.get(url);
    }
    // getDatas(){
    //     let url='https://www.googleapis.com/books/v1/volumes?q=react&filter=ebooks&key=AIzaSyAQrF9Shz9Oi1bDqQXyn9LZjzxz2xGIrIg';
    //     return this.http.get(url);
    // }
}





















// export class UserService{
// constructor(private logger:LoggerService){

// }

//     users=[
//         {name: 'hattori', status:'active'},
//         {name: 'kenichi', status:'active'},
//         {name: 'Doreamon', status:'in active'},
//         {name: 'Nobita', status:'active'}
//     ]
//     AddNewUser(name:string, status:string){
//         this.users.push({name:name,status:status});
//         this.logger.LogMessage(name,status);
//     }
// }


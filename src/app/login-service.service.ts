import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 
 books:any[]=[]

 constructor(private httpBook:HttpClient){

 }

 addBooks(theName,thebook,theimage,){
this.books.push({name:theName.value, author:thebook.value,image:theimage.value, Availablity:'Available' })
}

saveBooks(books:any[]):Observable<any>{
  return this.httpBook.post('https://bookstore-management-f75ae-default-rtdb.firebaseio.com/data.json',this.books)
}

getBooks(){
  return this.books 
  


}


}


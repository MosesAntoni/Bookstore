import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-catelog',
  templateUrl: './catelog.component.html',
  styleUrls: ['./catelog.component.css']
})
export class CatelogComponent implements OnInit {
  constructor(private http:HttpClient) { }
  arrayy:any=[]
  authorname=""
  producer=""
  description=""
  bookImage=""
  search=""
  ngOnInit(): void {
    // this.http.get('https://www.googleapis.com/books/v1/volumes?q=react+inauthor:keyes&key=AIzaSyAQrF9Shz9Oi1bDqQXyn9LZjzxz2xGIrIg')
    // .subscribe(data=>{
    //   console.log(data);
    //   this.arrayy=data
    //   // console.log(this.arrayy.items[0].volumeInfo.authors[0]);
    // // this.authorname=(this.arrayy.items[0].volumeInfo.authors);
    // // this.producer=(this.arrayy.items[0].volumeInfo.publisher);
    // // this.description=(this.arrayy.items[0].volumeInfo.description);
    // this.bookImage=(this.arrayy.items[7].volumeInfo.imageLinks.thumbnail);
    // })
  }
  myFun(name:any){
    this.search=name.value
    this.http.get('https://www.googleapis.com/books/v1/volumes?q='+this.search+'&filter=ebooks&key=AIzaSyAQrF9Shz9Oi1bDqQXyn9LZjzxz2xGIrIg')
    .subscribe(data=>{
      console.log(data);
      this.arrayy=data
      // console.log(this.arrayy.items[0].volumeInfo.authors[0]);
    this.authorname=(this.arrayy.items[4].volumeInfo.authors);
    this.producer=(this.arrayy.items[4].volumeInfo.publisher);
    this.description=(this.arrayy.items[4].volumeInfo.description);
    this.bookImage=(this.arrayy.items[4].volumeInfo.imageLinks.thumbnail);
    })
  }
  }








      // (this.arrayy.items[0].volumeInfo.pageCount)
    // (this.arrayy.items[0].volumeInfo.publishedDate)
    // (this.arrayy.items[0].volumeInfo.language)
    // (this.arrayy.items[0].volumeInfo.)
    // (this.arrayy.items[0].volumeInfo.)
    // (this.arrayy.items[0].volumeInfo.)
    // (this.arrayy.items[0].volumeInfo.)
    // (this.arrayy.items[0].volumeInfo.)
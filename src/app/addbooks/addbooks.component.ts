import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BooksAddedService } from '../books-added.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

//  booksAdded =false
  
  Image ='';
  @Output() getimage = new EventEmitter<string>()
  addBooks: any[];
  
  constructor(public addName:LoginServiceService, private router:Router,private newbooks:BooksAddedService) { }
  
  ngOnInit(): void {
    // this.newbooks.booksAddedEvent.subscribe(data=>{
    //   this.booksAdded = data;
    // })
  }
onSave(bookname,bookAuthor,bookImage){
this.addName.addBooks(bookname,bookAuthor,bookImage),

console.log(' clicked 1');

}

onSaveApi(){
  this.addName.saveBooks(this.addBooks).subscribe(sub=>{
    console.log(sub);
    
  },
  error=>{
    console.log(error);
    
  });
  
}

onView(event: Event){
 this.Image =(<HTMLInputElement>event.target).value, this.getimage.emit(this.Image);
console.log(event);
}




onBooksAddedClick(){
  this.newbooks.addNewBooks();
  console.log("clicked 2");
  
  }

}

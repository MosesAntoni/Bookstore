import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksAddedService } from '../books-added.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit,OnDestroy {
  booksAdded =false
  // booksAddedSubcription: Subscription;
  constructor(private newbooks:BooksAddedService) { }

  ngOnInit(): void {
    this.newbooks.booksAddedEvent.subscribe(data=>{
      this.booksAdded = data;
    })


  }
 ngOnDestroy(): void {
//   this.booksAddedSubcription.unsubscribe();
}

  // onBooksAddedClick(){
  // this.newbooks.addNewBooks();
  // }
}

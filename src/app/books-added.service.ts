import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class BooksAddedService{
    // booksAddedEvent =new EventEmitter<boolean>();
    booksAddedEvent =new Subject<boolean>();



addNewBooks(){
    // this.booksAddedEvent.emit(true) 
    this.booksAddedEvent.next(true) 
}

}
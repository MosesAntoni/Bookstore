import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.css']
})
export class DisplaybooksComponent implements OnInit {
  
  match='Available'
  books:any[]=[]
  constructor(public DisplayName:LoginServiceService) { }

  ngOnInit(): void {
    this.books=this.DisplayName.getBooks()
}
 
getAvailability(index){
 this.books[index].Availablity='Not Available'
}




}
 
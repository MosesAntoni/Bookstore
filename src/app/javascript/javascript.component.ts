import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers:[EnrollService]
})
export class JavascriptComponent implements OnInit {
title='JS '
  constructor(private enrollService:EnrollService) { }

  ngOnInit(): void {
  }

 // onEnroll(){
  //   alert('Thank you for your Enrolling to '+this.title+'Course')
  // }

  onEnroll(){
    // const enrollService = new EnrollService();
  this.enrollService.onEnrollClicked(this.title)
   }

}

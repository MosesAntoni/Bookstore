import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  // providers:[EnrollService]
})
export class AngularComponent implements OnInit {
title='Angular '
  constructor(private enrollService: EnrollService) {

   }

  ngOnInit(): void {
  }

  // onEnroll(){
  //   alert('Thank you for your Enrolling to '+this.title+'Course')
  // }

  onEnroll(){
    // const enrollService= new EnrollService();
    this.enrollService.onEnrollClicked(this.title);
    
}
}
import { Component, OnInit } from '@angular/core';


import  "firebase/auth"
import { Auth1Service } from '../auth1.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:Auth1Service) { }

  ngOnInit(): void {
 
  };


  logout(){
    
  }

}

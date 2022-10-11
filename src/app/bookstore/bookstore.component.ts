import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { Auth1Service } from '../auth1.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookstoreComponent implements OnInit {
  
  user = {localId:"someid",displayName:"somename"};
 
  
  name:string='';
  author:string='';
  image:string='';
  value='addbooks';

constructor(private logService:LoginServiceService,private router:Router,private auth1:Auth1Service) { 

}

  ngOnInit(): void {

}
 



 onSave(){
  
 }

  
  onNavigate(option:string){
if (option=='add') {
  this.router.navigateByUrl('/addbook')
  this.value='addbook'
}

else if (option=='display'){
  
  this.router.navigateByUrl('/displaybook')
   console.log('inside display');
  
}
// console.log(this.value);
else{
  this.router.navigateByUrl('/catalogue')
}






  }
}


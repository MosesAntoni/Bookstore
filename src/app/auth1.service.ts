import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {
    authInfo$: any;

  constructor(private  router:Router,private http:HttpClient){
    
  }


  isAuthenticated() : boolean  {
  if(sessionStorage.getItem('token')!==null){
    return true;
  }
  return false;
}

canAccess(){
  if(!this.isAuthenticated()){
    // redirect to login
this.router.navigate(['/login'])
  }
}

canAuthenticate(){
  if (this.isAuthenticated()) {
    //redirect to dashboard
    this.router.navigate(['/bookstore']);
  }
}


}

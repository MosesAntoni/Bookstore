import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/loggerService';
import { UserService } from './services/userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[EnrollService]
  //  providers:[UserService,LoggerService]
 })
 export class AppComponent implements OnInit{

  sample:any=[]
  books:any=[]

constructor(private user:UserService){

  this.user.getData().subscribe(data=>{
  console.warn(data);
  this.sample=data
  
})


// this.user.getDatas().subscribe(data=>{
//   console.warn(data);
//   this.books=data
  
// })


}
//===============================================================
  
// [x: string]: any;



ngOnInit(): void {
 
}

















// getData(val:string){
//   console.warn(val);
  
// }


































































//   // // title = 'Reactive Forms';
// //   title='UserService';
  
  
//   constructor(private userService:UserService){

//  }
 
// // users: {name:string,status:string}[]=[]
//  ngOnInit(){
//   // this.users= this.userService.users;

// }



// products =[
//   { name:'harry potter ',description:'this is very intresting story'},
//   { name:'Tom And Jerry ',description:'this is very intresting story'},
//   { name:'Timon and Pumbha ',description:'this is very intresting story'},
//   { name:'Dora ',description:'this is very intresting story'},
//   { name:'Ben 10 ',description:'this is very intresting story'}

// ]

// share(){
//   alert('The Product has been Shared')
// }

// ========================================================================


































































































//================================================================================
//  //Hierarchical Injection 
//  constructor(private enrollServise:EnrollService){

//   }
// //=================================================================================
  






//=====================================================================================


  //  reativeForm: FormGroup;
  
 // ngOnInit(){
//  this.reativeForm= new FormGroup({
//   firstname: new FormControl(null),
//   lastname: new FormControl(null),
//   email: new FormControl(null),
//   gender: new FormControl('male'),
//   country: new FormControl('india'),
//   hobbies: new FormControl(null)
//  }) 

 
// }
// onSubmit(){
//   console.log(this.reativeForm);
  
// }


















}

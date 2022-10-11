import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
//   {
//     path:"users",
//    component:UsersComponent,
//   //  canActivate:[TestCanActive]
//   children:[{
//     path:'test',component:AddEditUserComponent
//   }],

// //   canActivateChild:[],
// // canActivate: [TestCanActive]

  
//   },
//   {
//     path:"users/:id",
//     component:AddEditUserComponent
//   },
//   {
//     path:"users/:add",
//     component:AddEditUserComponent
//   }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

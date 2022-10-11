import { Routes } from "@angular/router"
import { AddbooksComponent } from "./addbooks/addbooks.component"
import { BookstoreComponent } from "./bookstore/bookstore.component"
import { CatelogComponent } from "./catelog/catelog.component"
import { DisplaybooksComponent } from "./displaybooks/displaybooks.component"
import { HomePageComponent } from "./home-page/home-page.component"
import { LoginPageComponent } from "./login-page/login-page.component"




export const routes:Routes =[
    {path:'',component:HomePageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'bookstore',component:BookstoreComponent},
    {path: 'addbook',component:AddbooksComponent},
    {path:'displaybook',component:DisplaybooksComponent},
    {path:'catalogue',component:CatelogComponent},
//



// { path: '', pathMatch: 'full', redirectTo: 'login'},
// { path: 'auth', component: AuthComponent},
// { path: 'admin', component: AdminComponent },





     


]

// {path:'bookstore',component:BookstoreComponent,
// children:[{path:'addbook',component:AddbooksComponent},
//           {path:'displaybook',component:DisplaybooksComponent}]
//        },
// {path: 'addbook',component:AddbooksComponent},
// {path:'displaybook',component:DisplaybooksComponent},
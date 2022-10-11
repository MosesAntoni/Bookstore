import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from'@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { DisplaybooksComponent } from './displaybooks/displaybooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { LoginServiceService } from './login-service.service';
import { BooksAddedService } from './books-added.service';
import { EnrollService } from './services/enroll.service';
import { LoggerService } from './services/loggerService';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';


import { ErrorComponent } from './error/error.component';
import { PreviewComponent } from './addbooks/preview/preview.component';
import { NewBookComponent } from './new-book/new-book.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CatelogComponent } from './catelog/catelog.component';
import { UserService } from './services/userservice';
import { AuthGuard } from './auth.guard';









@NgModule({
  declarations: [
    AppComponent,
   
    JavascriptComponent,
    AngularComponent,
    DisplaybooksComponent,
   BookstoreComponent,
    AddbooksComponent,
    BootstrapComponent,
 
   
 
    ErrorComponent,
    PreviewComponent,
    NewBookComponent,
    LoginPageComponent,

    HomePageComponent,
    NavbarComponent,
 
    CatelogComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [LoginServiceService,EnrollService,LoggerService,BooksAddedService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

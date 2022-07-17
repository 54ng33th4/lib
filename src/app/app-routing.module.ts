import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewBookComponent } from './new-book/new-book.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{path:'', component:HomeComponent},
{path:'books', component:BookListComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignUpComponent},
{path:'insert', component:NewBookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

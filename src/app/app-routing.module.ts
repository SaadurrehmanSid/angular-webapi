


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CourseComponent } from './course/course.component';
import { CreateAuthorComponent } from './create-author/create-author.component';


const routes: Routes = [
  { path: '',  redirectTo: 'AppComponent', pathMatch: 'full' } ,
  { path: 'authors', component: AuthorsComponent },
  { path: 'add', component: CreateAuthorComponent},
  { path: 'courses', component: CourseComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

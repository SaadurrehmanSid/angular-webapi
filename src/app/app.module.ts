import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS, ɵHttpInterceptingHandler } from '@angular/common/http';
import { WorkoutService } from './workout.service';
import { CourseEidtComponent } from './course-eidt/course-eidt.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    AuthorDetailsComponent,
    CreateAuthorComponent,
    CourseDetailsComponent,
    CourseEidtComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
     
    
  ],
  providers: [ CourseService,
                WorkoutService    ,
    // HttpClientModule
  

  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }

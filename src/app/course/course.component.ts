import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses;
  
  
  
  constructor(service :CourseService) {
      service.getCourses().subscribe(res=> this.courses = res);
   }

  ngOnInit(): void {
  }

}

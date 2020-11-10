import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

public authors : any;


  
  constructor(private authorService: WorkoutService)
   {
   
   
  }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(res => this.authors = res);
  }


  

}

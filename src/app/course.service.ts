import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:51044/api/courses';
 
  constructor(private http: HttpClient,
  ) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
getCourses(): Observable<CourseService[]>
{
  return this.http.get<CourseService[]>(this.accessPointUrl,{headers: this.headers})
}


  public get() {
    // Get all jogging data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  updateCourse(postId: number, CourseService):Observable<CourseService> {
    return this.http.put<CourseService>(this.accessPointUrl + '/' + CourseService.id, CourseService, {headers: this.headers})
  }  

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  // change `root` to restrict availability to a specific module
  providedIn: 'root'
})
export class CommentsService {

  comments = null;
  error    = null;
  loading  = true;

  constructor(private http: HttpClient) {
    http.get('/assets/comments.json').subscribe((data) => {
      console.log(data);
      this.comments = data;
    },
    (error) => {
      console.log(error);
      this.error = error.statusText;
    }),
    () => {
      this.loading = false;
    };
  }
}

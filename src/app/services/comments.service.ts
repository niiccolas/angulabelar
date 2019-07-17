import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { finalize, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  // change `root` to restrict availability to a specific module
  providedIn: 'root'
})
export class CommentsService {

  comments = null;
  error    = null;
  loading  = true;
  books    = null;

  constructor(private http: HttpClient) {
    http.get('/assets/comments.json')
    .pipe(
      delay(1000), // forces an artifical delay before displaying data
      finalize(() => {
        this.loading = false;
      })
    )
    .subscribe((data) => {
      console.log(data);
      this.comments = data;
    }, (error) => {
      console.log(error);
      this.error = error.statusText;
    }),
    () => {
      this.loading = false;
    };

    let bookParams = new HttpParams().set('q', 'johnny+halliday');

    http.get('https://www.googleapis.com/books/v1/volumes', { params: bookParams }).subscribe((data) => {
      console.log('-------HELLO FROM GBOOKS REQUEST---------');
      console.log(data.items);
      this.books = data.items;
    });
  }
}

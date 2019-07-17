import { Component } from '@angular/core';
import { CommentsService } from './services/comments.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Bookseller';

  constructor(private _commentsService: CommentsService) {
  }

  lstcomments: Comments[];

  ngOnInit(): void {

  }
}

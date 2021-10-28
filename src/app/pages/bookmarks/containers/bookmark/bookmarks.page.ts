import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromBookmarkSelectors from '../../store/bookmark.selectors';
import * as fromBookmarkActions from '../../store/bookmark.actions';
import { Bookmark } from './../../../../shared/models/bookmark.model';

@Component({
  selector: 'jv-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {

  bookmarks$: Observable<Bookmark[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bookmarks$ = this.store.pipe(
      select(fromBookmarkSelectors.selectBookmarkList)
    );
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBookmarkActions.removeBookmark({ id }));
  }
}

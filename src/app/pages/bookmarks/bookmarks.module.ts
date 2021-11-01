import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { BookmarksPage } from './containers/bookmark/bookmarks.page';
import { bookmarkReducer } from './store/bookmark.reducer';

@NgModule({
  declarations: [
    BookmarksPage
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('bookmark', bookmarkReducer)
  ],
})
export class BookmarksModule {}

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BookmarkState } from './bookmark.reducer';

export const selectBookmarkState = createFeatureSelector('bookmark');

export const selectBookmarkList = createSelector(
  selectBookmarkState,
  (bookmarkState: BookmarkState) => bookmarkState.list
);

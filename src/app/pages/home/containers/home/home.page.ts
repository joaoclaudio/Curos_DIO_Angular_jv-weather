import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { CityWeather } from '../../../../shared/models/weather.model';
import * as fromBookmarkSelectors from '../../../bookmarks/store/bookmark.selectors';
import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';
import { Bookmark } from './../../../../shared/models/bookmark.model';

@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  cityWeather: CityWeather;
  cityWeather$: Observable<CityWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  listBookmark$: Observable<Bookmark[]>;
  isCurrentFavorite$: Observable<boolean>;

  searchControl: FormControl;
  text: string;

  private componentDestroyed$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.searchControl = new FormControl('', Validators.required);

    this.cityWeather$ = this.store.pipe(
      select(fromHomeSelectors.selectCurrentWeather)
    );

    this.cityWeather$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((value) => (this.cityWeather = value));

    this.loading$ = this.store.pipe(
      select(fromHomeSelectors.selectCurrentWeatherLoading)
    );

    this.error$ = this.store.pipe(
      select(fromHomeSelectors.selectCurrentWeatherError)
    );

    this.listBookmark$ = this.store.pipe(
      select(fromBookmarkSelectors.selectBookmarkList)
    );

    this.isCurrentFavorite$ = combineLatest([
      this.cityWeather$,
      this.listBookmark$,
    ]).pipe(
      map(([current, bookmarkList]) => {
        if (!!current) {
          return bookmarkList.some(
            (bookmark) => bookmark.id === current.city.id
          );
        }
        return false;
      })
    );
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
    this.store.dispatch(fromHomeActions.clearHomeState());
  }

  doSearch() {
    const text = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({ query: text }));
  }

  onToggleBookmark() {
    const bookmark = new Bookmark();
    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;
    this.store.dispatch(fromHomeActions.toggleBookmark({ entity: bookmark }));
  }
}

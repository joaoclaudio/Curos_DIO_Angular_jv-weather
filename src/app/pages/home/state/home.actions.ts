import { Bookmark } from './../../../shared/models/bookmark.model';
import { createAction, props } from '@ngrx/store';

export const loadCurrentWeather = createAction(
  '[Home] Load current Weather',
  props<{ query: string }>()
);

export const loadCurrentWeatherSuccess = createAction(
  '[Weather API] Load Current Weather Success',
  props<{ entity: any }>()
);

export const loadCurrentWeatherFailed = createAction(
  '[Weather API] Load Current Weather Failed'
);

export const toggleBookmark = createAction(
  '[Home] Toggle Bookmark',
  props<{ entity: Bookmark }>()
);

export const clearHomeState = createAction(
  '[Home] Clear Home State'
)

import { createAction, props } from '@ngrx/store';

// export const changeText = createAction(
//   '[Home] Change text',
//   props<{ text: string }>()
// );

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

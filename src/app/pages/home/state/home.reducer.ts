import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';

import * as fromHomeActions from './home.actions';

export interface HomeState {
  text: string;
}

export const homeInitialState: HomeState = {
  text: 'Fortaleza',
};

const reducer = createReducer(
  homeInitialState,
  on(fromHomeActions.changeText, (currentState, { text }) => ({
    ...currentState,
    text,
  }))
);

export function homeReducer(
  state: HomeState | undefined,
  action: Action
): HomeState {
  return reducer(state, action);
}

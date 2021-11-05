import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { RouterState } from './router/router.reducer';

export interface AppState {
  /**
   * Guarda o estado do router
   */
  router: RouterReducerState<RouterState>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

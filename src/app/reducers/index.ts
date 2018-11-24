import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSearch from './search.reducer';

export interface State {
  search: fromSearch.State;
}

export const getSearchState = createFeatureSelector<fromSearch.State>('search');

export const reducers: ActionReducerMap<State> = {
  search: fromSearch.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getSearchQ = createSelector(getSearchState, fromSearch.getQ);
export const getSearchLoading = createSelector(getSearchState, fromSearch.getLoading);
export const getSearchReasults = createSelector(getSearchState, fromSearch.getResults);
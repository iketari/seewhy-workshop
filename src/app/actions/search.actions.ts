import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  LoadSearch = '[Search] Load Searchs',
  LoadSearchSuccess = '[Search] Load Search Success',
  LoadSearchFailed = '[Search] Load Searchs Failed',
}

export class LoadSearch implements Action {
  readonly type = SearchActionTypes.LoadSearch;
  constructor(public payload: { q: string }) {};
}

export class LoadSearchSuccess implements Action {
  readonly type = SearchActionTypes.LoadSearchSuccess;
  constructor(public payload: any) {};
}

export class LoadSearchFailed implements Action {
  readonly type = SearchActionTypes.LoadSearchFailed;
  constructor(public payload: any) {};
}

export type SearchActions = LoadSearch | LoadSearchSuccess | LoadSearchFailed;

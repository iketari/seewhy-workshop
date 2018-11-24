import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { withLatestFrom, switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { SearchActions, LoadSearch, SearchActionTypes, LoadSearchSuccess, LoadSearchFailed } from '../actions/search.actions';
import { Action, Store } from '@ngrx/store';
import { State } from '../reducers';
import { NasaService } from '../services/nasa/nasa.service';


@Injectable()
export class SearchEffects {

  @Effect()
  public search$: Observable<Action> = this.actions$.pipe(
    ofType<LoadSearch>(SearchActionTypes.LoadSearch),
    withLatestFrom(this.store),
    switchMap(([_action, state]) => {
      return this.nasaService.search(state.search.q).pipe(
        map((result) => new LoadSearchSuccess(result.collection.items)),
        catchError((err) => of(new LoadSearchFailed(err)))
      )
    })
  )

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private nasaService: NasaService
  ) {}
}

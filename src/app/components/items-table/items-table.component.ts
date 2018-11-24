import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/reducers/search.reducer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State, getSearchReasults } from 'src/app/reducers';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {

  public rows$: Observable<SearchResult[]>

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.rows$ = this.store.pipe(
      select(getSearchReasults)
    );
  }

}

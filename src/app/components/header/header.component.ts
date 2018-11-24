import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadSearch } from 'src/app/actions/search.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store<State>) { }

  /**
   * onSearchChange
   */
  public onSearchChange(value: string) {
    this.store.dispatch(new LoadSearch({
      q: value
    }));
  }

}

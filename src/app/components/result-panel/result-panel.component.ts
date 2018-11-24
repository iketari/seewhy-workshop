import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getSearchQ } from 'src/app/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-panel',
  templateUrl: './result-panel.component.html',
  styleUrls: ['./result-panel.component.scss']
})
export class ResultPanelComponent implements OnInit {

  public $searchQ: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.$searchQ = this.store.pipe(
      select(getSearchQ)
    );
  }

}

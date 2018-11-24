import { Action } from '@ngrx/store';
import { SearchActionTypes, SearchActions } from '../actions/search.actions';


export interface SearchResult {
  preview: string;
  center: string;
  description: string;
  title: string;
  date_created: Date;
}

export interface State {
  q: string;
  loading: boolean;
  results: SearchResult[];
}

export const initialState: State = {
  q: null,
  loading: false,
  results: []
};

export function reducer(state = initialState, action: SearchActions): State {
  switch (action.type) {

    case SearchActionTypes.LoadSearch: {
      const { q } = action.payload;
      return {
        ...state,
        q
      };
    }

    case SearchActionTypes.LoadSearchSuccess: {
      return {
        ...state,
        results: action.payload.map((searchEntry) => {
          const {href:preview} = searchEntry.links[0];
          const {description, title, date_created, center} = searchEntry.data[0];

          return {
            center,
            preview,
            description,
            title,
            date_created: Date.parse(date_created)
          }
        }),
        loading: false
      }
    }

    case SearchActionTypes.LoadSearchFailed: {
      return {
        ...state,
        results: [],
        loading: false
      }
    }

    default:
      return state;
  }
}

export const getQ = (state: State) => state.q;
export const getLoading = (state: State) => state.loading;
export const getResults = (state: State) => state.results;
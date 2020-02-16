import * as filterActions from './filter.actions';

const initialState: filterActions.validFilters = 'todos';

export function filterReducer(state = initialState, action: filterActions.actions) {
  switch (action.type) {
    case filterActions.SET_FILTER:
      return action.filter;

    default:
      return state;
      break;
  }

}

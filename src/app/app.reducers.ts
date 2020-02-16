import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as reducerTodo from "./todo/todo.reducer";
import * as reducerFilter from "./filter/filter.reducer";
import * as filerActionsfrom from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: filerActionsfrom.validFilters;
}


export const APP_REDUCERS: ActionReducerMap<AppState> = {
  todos: reducerTodo.todoReducer,
  filter: reducerFilter.filterReducer
}

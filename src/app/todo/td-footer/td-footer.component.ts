import { Component, OnInit } from '@angular/core';
import * as allFilters from "../../filter/filter.actions";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../models/todo.model';
import * as allActions from "../todo.actions";

@Component({
  selector: 'app-td-footer',
  templateUrl: './td-footer.component.html',
  styleUrls: ['./td-footer.component.css']
})
export class TdFooterComponent implements OnInit {

  filtersValids: allFilters.validFilters[] = ['todos', 'completados', 'pendientes'];
  currentFilter: allFilters.validFilters;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.countPendientes(state.todos);
    });
  }

  changeFilter(newFilter: allFilters.validFilters) {
    const action = new allFilters.SetFilterAction(newFilter);
    this.store.dispatch(action);

  }

  countPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  deleteAll(){
    const action = new allActions.BorrarAllAction();
    this.store.dispatch(action);
  }

}

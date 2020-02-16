import { Component, OnInit } from '@angular/core';
import { ToggleAllAction, actions } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  completed: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completed = !this.completed;
    const action = new ToggleAllAction(this.completed);
    this.store.dispatch(action);
  }
}

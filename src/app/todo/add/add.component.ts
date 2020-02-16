import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  input: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.input = new FormControl('', Validators.required);
  }

  addTodo() {
    if (this.input.invalid)
      return;

    const action = new todoActions.AddTodoAction(this.input.value);
    this.store.dispatch(action);
    this.input.setValue('');

  }

}

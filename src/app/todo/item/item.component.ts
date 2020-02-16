import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleAction, EditAction, BorrarAction } from '../todo.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInput', { static: false }) txtInput: ElementRef;
  check: FormControl;
  input: FormControl;
  editando: boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.check = new FormControl(this.todo.completado);
    this.input = new FormControl(this.todo.texto, Validators.required);
    this.check.valueChanges.subscribe(() => {
      const action = new ToggleAction(this.todo.id);
      this.store.dispatch(action);

    });
  }

  edit() {
    this.editando = true;
    setTimeout(() => {
      this.txtInput.nativeElement.select();
    }, 1);
  }

  delete() {
    const action = new BorrarAction(this.todo.id);
    this.store.dispatch(action);
  }

  editionTerminate() {
    this.editando = false;
    if (this.input.invalid) {
      return;
    }

    if (this.input.value === this.todo.texto) {
      return;
    }

    const action = new EditAction(this.todo.id, this.input.value);
    this.store.dispatch(action);
  }
}

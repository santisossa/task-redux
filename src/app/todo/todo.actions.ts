import { Action } from "@ngrx/store";

export const ADD_TODO = "[TODO] Add todo";
export const TOGGLE_TODO = "[TODO] Toggle todo";
export const TOGGLE_ALL_TODO = "[TODO] Toggle All todo";
export const EDIT_TODO = "[TODO] Edit todo";
export const BORRAR_TODO = "[TODO] Delete todo";
export const BORRAR_ALL_TODO = "[TODO] Delete all todo";

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public texto: string) { }
}

export class ToggleAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) { }
}
export class ToggleAllAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completed: boolean) { }
}

export class EditAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public id: number, public texto: string) { }
}

export class BorrarAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number) { }
}

export class BorrarAllAction implements Action {
  readonly type = BORRAR_ALL_TODO;
}

export type actions = AddTodoAction | ToggleAction | EditAction | BorrarAction | ToggleAllAction | BorrarAllAction;

import * as todoActions from "./todo.actions";
import { Todo } from './models/todo.model';


const todo1 = new Todo("maquetar html");
const todo2 = new Todo("agregar estilos css");
const todo3 = new Todo("agregar funcionalidad javaScript");
todo3.completado = true;
const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: todoActions.actions): Todo[] {

  switch (action.type) {
    case todoActions.ADD_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];
    case todoActions.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });

    case todoActions.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
          return {
            ...todoEdit,
            completado: action.completed
          };
      });

    case todoActions.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });

    case todoActions.BORRAR_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);

    case todoActions.BORRAR_ALL_TODO:
      return state.filter(todoEdit => !todoEdit.completado);

    default:
      return state;
  }

}

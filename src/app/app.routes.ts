import { Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
export const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: 'todos/:id', component: TodoDetailComponent }
];

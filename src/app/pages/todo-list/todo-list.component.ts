import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

//Class
export class TodoListComponent implements OnInit {

 //list data
  todos = [
 { id: 1, title: 'Learn Angular', completed: false },
 { id: 2, title: 'Build Todo App', completed: false }
 ];
 newTodoTitle: string = '';
 newTodoCompleted: boolean = false;
 showEditForm: boolean = false; //form show or hide
 selectedTodo: any = {
  id: null,
  title: '',
  completed: false
 };


 //constructor
 constructor(private todoService: TodoService, private router: Router) {}

 //Lifecycle
 ngOnInit(): void {
  this.getTodos();
 }
 getTodos() {
  this.todoService.getTodos().subscribe(res => {
    this.todos = res;
  });
 }
 //methods 1
 addTodo() {
  if (!this.newTodoTitle.trim()) {
    alert('Please enter Todo Title');
    return;
  }
  const newTodo = {
    userId: 1,
    title: this.newTodoTitle,
    completed: this.newTodoCompleted
  };
  this.todoService.addTodo(newTodo).subscribe(() => {
   
    //UI Update
    this.todos.unshift({
      id: Date.now(),//temporary ID
      ...newTodo
    });

    //Reset Form
    this.newTodoTitle = '';
    this.newTodoCompleted = false;

    alert('Todo added successfully')
  });
 }
 viewTodo(id: number) {
  this.router.navigate(['/todos', id]);
 }
 //Method 2
 openEditForm(todo: any) {
    this.selectedTodo = { ...todo};
    this.showEditForm = true;
  }
  //Method 3
 updateTodo() {
    this.todoService.updateTodo(this.selectedTodo)
    .subscribe(() => {
      //UI list update
      const index = this.todos.findIndex(
        t => t.id === this.selectedTodo.id
      );

      if (index !== -1) {
        this.todos[index] = { ...this.selectedTodo };
      }
      this.showEditForm=false;
      alert('Todo updated successfully');
      
    });
  }
  //Method 4
  closeEditForm() {
    this.showEditForm = false;
  }
  //Method 5 (delete)
  deleteTodo(id: number)
  {
    const confirmDelete = confirm('Are you sure, you want to delete this Todo');
    if (!confirmDelete) {
      return;
    }
    this.todoService.deleteTodo(id).subscribe(()=> {
       //Delete in UI
       this.todos = this.todos.filter(todo => todo.id !== id);
       alert('Todo deleted successfully');
    }
    );
  }
}

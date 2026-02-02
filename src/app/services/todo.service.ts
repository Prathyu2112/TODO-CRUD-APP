import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users/1/todos';
  constructor(private http: HttpClient) {}
  //get all tools
  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  //get single todo by id
getTodoById(id: number): Observable<any> {
 return this.http.get<any>(
  `https://jsonplaceholder.typicode.com/todos/${id}`
 );
}
updateTodo( todo: any ) {
  return this.http.put( `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    todo
  );
}
deleteTodo(id: number) {
  return this.http.delete( `https://jsonplaceholder.typicode.com/todos/${id}`

);
}
addTodo(todo: any) {
  return this.http.post( `https://jsonplaceholder.typicode.com/todos`,
    todo
  );
}
}
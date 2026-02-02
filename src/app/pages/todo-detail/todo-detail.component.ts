import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: any;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}
  ngOnInit(): void {
    const id = 
    Number (this.route.snapshot.paramMap.get('id'));

    this.todoService.getTodoById(id).subscribe((data: any) => {
      this.todo = data;
    });
  }
}

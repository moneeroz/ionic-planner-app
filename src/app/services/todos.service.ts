import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  apiUrl: string = 'http://localhost:3333/api/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Itodo[]>(this.apiUrl);
  }

  getTodo(todo_id: string) {
    return this.http.get<Itodo>(this.apiUrl + '/' + todo_id);
  }

  createTodo(todo_data: any) {
    return this.http.post<Itodo>(this.apiUrl, todo_data);
  }

  updateTodoStatus(todo_id: string) {
    return this.http.patch<Itodo>(this.apiUrl + '/update-status/' + todo_id, {
      status: 'completed',
    });
  }

  editTodo(todo_id: string, todo_data: any) {
    return this.http.put<Itodo>(
      this.apiUrl + '/update-todo/' + todo_id,
      todo_data,
    );
  }
}

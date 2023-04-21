import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  apiUrl: string = 'http://localhost:3333/api/todos';

  constructor(private http: HttpClient) {}

  getGoals() {
    return this.http.get<Itodo[]>(this.apiUrl);
  }

  getGoal(todo_id: string) {
    return this.http.get<Itodo>(this.apiUrl + '/' + todo_id);
  }

  createGoal(goal_data: any) {
    return this.http.post<Itodo>(this.apiUrl, goal_data);
  }

  updateGoalStatus(todo_id: string, status: string) {
    return this.http.patch<Itodo>(
      this.apiUrl + '/update-status/' + todo_id,
      status,
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itodo } from '../interfaces/itodo';
import { Igoal } from '../interfaces/igoal';

@Injectable({
  providedIn: 'root',
})
export class AchievementsService {
  achievementsApiUrl: string = 'http://localhost:3333/api/achievements';

  goalsApiUrl: string = 'http://localhost:3333/api/goals';
  todosApiUrl: string = 'http://localhost:3333/api/todos';

  constructor(private http: HttpClient) {}

  // Get items marked as completed and not deleted
  getAchievedTodos() {
    return this.http.get<Itodo[]>(this.achievementsApiUrl + '/achieved-todos');
  }

  getAchievedGoals() {
    return this.http.get<Igoal[]>(this.achievementsApiUrl + '/achieved-goals');
  }

  // Update item deleted status to true
  updateTodoDeleteStatus(todo_id: string) {
    return this.http.patch<Itodo>(
      this.todosApiUrl + '/deleted-status/' + todo_id,
      {
        deleted: 'true',
      },
    );
  }

  updateGoalDeleteStatus(goal_id: string) {
    return this.http.patch<Igoal>(
      this.goalsApiUrl + '/deleted-status/' + goal_id,
      {
        deleted: 'true',
      },
    );
  }
}

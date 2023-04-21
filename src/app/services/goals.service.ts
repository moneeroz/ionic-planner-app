import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igoal } from '../interfaces/igoal';

@Injectable({
  providedIn: 'root',
})
export class GoalsService {
  apiUrl: string = 'http://localhost:3333/api/goals';

  constructor(private http: HttpClient) {}

  getGoals() {
    return this.http.get<Igoal[]>(this.apiUrl);
  }

  getGoal(goal_id: string) {
    return this.http.get<Igoal>(this.apiUrl + '/' + goal_id);
  }

  createGoal(goal_data: any) {
    return this.http.post<Igoal>(this.apiUrl, goal_data);
  }

  updateGoalStatus(goal_id: string, status: string) {
    return this.http.patch<Igoal>(
      this.apiUrl + '/update-status/' + goal_id,
      status,
    );
  }
}

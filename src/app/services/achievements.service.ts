import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itodo } from '../interfaces/itodo';
import { Igoal } from '../interfaces/igoal';

@Injectable({
  providedIn: 'root',
})
export class AchievementsService {
  todosApiUrl: string = 'http://localhost:3333/api/achievements/achieved-todos';
  goalsApiUrl: string = 'http://localhost:3333/api/achievements/achieved-goals';

  constructor(private http: HttpClient) {}

  getAchievedTodos() {
    return this.http.get<Itodo[]>(this.todosApiUrl);
  }

  getAchievedGoals() {
    return this.http.get<Igoal[]>(this.goalsApiUrl);
  }
}

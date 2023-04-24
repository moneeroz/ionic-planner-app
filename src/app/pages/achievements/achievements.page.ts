import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AchievementsService } from 'src/app/services/achievements.service';
import { Itodo } from 'src/app/interfaces/itodo';
import { Igoal } from 'src/app/interfaces/igoal';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, DatePipe],
})
export class AchievementsPage implements OnInit {
  achievedTodos: Itodo[] = [];
  achievedGoals: Igoal[] = [];

  constructor(private achievementsService: AchievementsService) {}

  ionViewWillEnter() {
    this.achievementsService
      .getAchievedTodos()
      .subscribe((completedTodos) => (this.achievedTodos = completedTodos));
    this.achievementsService
      .getAchievedGoals()
      .subscribe((completedGoals) => (this.achievedGoals = completedGoals));
  }

  onTodoDelete(todo_id: string) {
    // remove todo from UI
    const index = this.achievedTodos.findIndex((todo) => {
      // Get todo index from the array
      return todo.id === todo_id;
    });

    // Remove todo data from array
    this.achievedTodos.splice(index, 1);

    alert('todo deleted successfully!');
  }

  onGoalDelete(goal_id: string) {
    // remove goal from UI
    const index = this.achievedGoals.findIndex((goal) => {
      // Get goal index from the array
      return goal.id === goal_id;
    });

    // Remove goal data from array
    this.achievedGoals.splice(index, 1);

    alert('goal deleted successfully!');
  }

  ngOnInit() {}
}

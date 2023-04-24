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

  // move item to trash methods
  onTodoDelete(todo_id: string) {
    // remove todo from UI
    const index = this.achievedTodos.findIndex((todo) => {
      // Get todo index from the array
      return todo.id === todo_id;
    });

    if (
      confirm(
        `Are you sure you want to delete ${this.achievedTodos[index].name} Todo?`,
      )
    ) {
      this.achievementsService
        .updateTodoDeleteStatus(todo_id)
        .subscribe((result) => console.log(result));

      // Remove note data from array
      this.achievedTodos.splice(index, 1);

      alert('Todo moved to trash successfully!');
    }
  }

  onGoalDelete(goal_id: string) {
    // remove goal from UI
    const index = this.achievedGoals.findIndex((goal) => {
      // Get goal index from the array
      return goal.id === goal_id;
    });

    if (
      confirm(
        `Are you sure you want to delete ${this.achievedGoals[index].name} Goal?`,
      )
    ) {
      this.achievementsService
        .updateGoalDeleteStatus(goal_id)
        .subscribe((result) => console.log(result));

      // Remove note data from array
      this.achievedGoals.splice(index, 1);

      alert('Goal moved to trash successfully!');
    }
  }

  ngOnInit() {}
}

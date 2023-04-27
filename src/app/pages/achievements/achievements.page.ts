import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { AlertController, IonicModule, ToastController } from '@ionic/angular';
import { AchievementsService } from 'src/app/services/achievements.service';
import { Itodo } from 'src/app/interfaces/itodo';
import { Igoal } from 'src/app/interfaces/igoal';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, DatePipe, RouterModule, NgIf],
})
export class AchievementsPage implements OnInit {
  achievedTodos: Itodo[] = [];
  achievedGoals: Igoal[] = [];
  deletedTodo!: Itodo;
  deletedGoal!: Igoal;

  constructor(
    private achievementsService: AchievementsService,
    private alertController: AlertController,
    private toastController: ToastController,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.achievementsService
      .getAchievedTodos()
      .subscribe((completedTodos) => (this.achievedTodos = completedTodos));
    this.achievementsService
      .getAchievedGoals()
      .subscribe((completedGoals) => (this.achievedGoals = completedGoals));
  }

  /// /// /// /// /// /// /// /// /// /// /// /// ///
  // move todo to trash methods
  async onTodoDelete(todo_id: string) {
    const index = this.achievedTodos.findIndex((todo) => {
      // Get todo index from the array
      return todo.id === todo_id;
    });
    const deleteAlert = await this.alertController.create({
      header: 'Delete',

      message: `Are you sure you want to move ${this.achievedTodos[index].name} to Trash!`,
      buttons: [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          handler: () => {
            // change todo deleted status to true on the database
            this.achievementsService
              .updateTodoDeleteStatus(todo_id)
              .subscribe((result) => console.log(result));
            this.todoToast(this.achievedTodos[index].id);

            // remove todo from UI
            // Remove todo data from array
            this.achievedTodos.splice(index, 1);
          },
        },
      ],
    });
    await deleteAlert.present();

    // if (
    //   confirm(
    //     `Are you sure you want to delete ${this.achievedTodos[index].name} Todo?`,
    //   )
    // ) {
    //   this.achievementsService
    //     .updateTodoDeleteStatus(todo_id)
    //     .subscribe((result) => console.log(result));

    //   // Remove note data from array
    //   this.achievedTodos.splice(index, 1);

    //   alert('Todo moved to trash successfully!');
    // }
  }

  async todoToast(id: string) {
    this.achievedTodos.forEach((todo) => {
      if (todo.id === id) {
        this.deletedTodo = todo;
      }
    });
    const toast = await this.toastController.create({
      message: `${this.deletedTodo.name} moved to Trash successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }

  /// /// /// /// /// /// /// /// /// /// /// /// ///
  // move goal to trash methods
  async onGoalDelete(goal_id: string) {
    // remove goal from UI
    const index = this.achievedGoals.findIndex((goal) => {
      // Get goal index from the array
      return goal.id === goal_id;
    });

    const deleteAlert = await this.alertController.create({
      header: 'Delete',

      message: `Are you sure you want to move ${this.achievedGoals[index].name} to Trash!`,
      buttons: [
        {
          text: 'NO',
        },
        {
          text: 'YES',
          handler: () => {
            // change todo deleted status to true on the database
            this.achievementsService
              .updateGoalDeleteStatus(goal_id)
              .subscribe((result) => console.log(result));
            this.goalToast(this.achievedGoals[index].id);

            // Remove todo data from array
            this.achievedGoals.splice(index, 1);
          },
        },
      ],
    });
    await deleteAlert.present();

    //   if (
    //     confirm(
    //       `Are you sure you want to delete ${this.achievedGoals[index].name} Goal?`,
    //     )
    //   ) {
    //     this.achievementsService
    //       .updateGoalDeleteStatus(goal_id)
    //       .subscribe((result) => console.log(result));

    //     // Remove note data from array
    //     this.achievedGoals.splice(index, 1);

    //     alert('Goal moved to trash successfully!');
    //   }
  }

  async goalToast(id: string) {
    this.achievedGoals.forEach((goal) => {
      if (goal.id === id) {
        this.deletedGoal = goal;
      }
    });
    const toast = await this.toastController.create({
      message: `${this.deletedGoal.name} moved to Trash successfully!`,
      duration: 1500,
      position: 'bottom',
    });

    await toast.present();
  }
}

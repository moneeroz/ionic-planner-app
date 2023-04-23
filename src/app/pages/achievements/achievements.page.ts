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

  ngOnInit() {}
}

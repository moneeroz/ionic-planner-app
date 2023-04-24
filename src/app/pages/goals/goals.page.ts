import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { GoalComponent } from 'src/app/components/goal/goal.component';
import { Igoal } from 'src/app/interfaces/igoal';
import { GoalsService } from 'src/app/services/goals.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
  standalone: true,
  imports: [IonicModule, GoalComponent, NgFor, RouterModule],
})
export class GoalsPage implements OnInit {
  goals: Igoal[] = [];

  constructor(private goalsService: GoalsService) {}

  ionViewWillEnter() {
    this.goalsService.getGoals().subscribe((goals) => (this.goals = goals));
  }

  onChecked(goal_id: string) {
    // remove goal from UI
    const index = this.goals.findIndex((goal) => {
      // Get goal index from the array
      return goal.id === goal_id;
    });

    // Remove goal data from array
    this.goals.splice(index, 1);

    alert('goal completed successfully!');
  }

  ngOnInit() {}
}

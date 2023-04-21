import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { GoalComponent } from 'src/app/components/goal/goal.component';
import { Igoal } from 'src/app/interfaces/igoal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
  standalone: true,
  imports: [IonicModule, GoalComponent, NgFor],
})
export class GoalsPage implements OnInit {
  goals: Igoal[] = [];

  constructor(private goalsService: GoalsService) {}

  ionViewWillEnter() {
    this.goalsService.getGoals().subscribe((goals) => (this.goals = goals));
  }

  ngOnInit() {}
}

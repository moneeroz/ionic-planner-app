import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Igoal } from 'src/app/interfaces/igoal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
  standalone: true,
  imports: [IonicModule, DatePipe, RouterModule],
})
export class GoalComponent implements OnInit {
  @Input() goal!: Igoal;
  constructor() {}

  ngOnInit() {}
}

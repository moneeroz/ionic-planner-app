import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { Igoal } from 'src/app/interfaces/igoal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
  standalone: true,
  imports: [IonicModule, DatePipe, RouterModule],
})
export class GoalComponent implements OnInit {
  @Input() goal!: Igoal;

  // custom event emitters
  @Output() checkedEvent = new EventEmitter();

  constructor(
    private goalsService: GoalsService,
    private alertController: AlertController,
  ) {}

  ngOnInit() {}

  onChecked(event: any) {
    if (event.detail.checked) {
      this.goalsService
        .updateGoalStatus(this.goal.id)
        .subscribe((goal) => console.log(goal));

      // Triggering our custom event
      this.checkedEvent.emit(this.goal.id);
    }
  }

  async presentAlert(event: any) {
    if (event.detail.checked) {
      const alert = await this.alertController.create({
        header: this.goal.name,
        message: 'completed successfully!',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}

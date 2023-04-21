import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Itodo } from 'src/app/interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [IonicModule, DatePipe, RouterModule],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Itodo;
  constructor() {}

  ngOnInit() {}
}

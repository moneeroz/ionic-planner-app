import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Todos', url: '/todos', icon: 'document-text' },
    { title: 'Goals', url: '/goals', icon: 'stats-chart' },
    { title: 'Notes', url: '/notes', icon: 'journal' },
    { title: 'Achievements', url: '/achievements', icon: 'trending-up' },
  ];

  public appAddPages = [
    { title: 'Add Todo', url: '/add-todo', icon: 'add' },
    { title: 'Add Goal', url: '/add-goal', icon: 'ribbon' },
    { title: 'Add Note', url: '/add-note', icon: 'create' },
  ];

  constructor() {}
}

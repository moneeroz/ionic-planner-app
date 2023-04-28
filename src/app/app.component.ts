import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrashService } from './services/trash.service';
import { Inote } from './interfaces/inote';
import { Igoal } from './interfaces/igoal';
import { Itodo } from './interfaces/itodo';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  trashCount: number = 3;

  constructor() {}

  public appPages = [
    { title: 'Todos', url: '/todos', icon: 'document-text', color: 'primary' },
    { title: 'Goals', url: '/goals', icon: 'stats-chart', color: 'secondary' },
    { title: 'Notes', url: '/notes', icon: 'journal', color: 'tertiary' },
    {
      title: 'Achievements',
      url: '/achievements',
      icon: 'trending-up',
      color: 'success',
    },
    { title: 'Image Diary', url: '/image-diary', icon: 'images' },
    { title: 'Video Diary', url: '/video-diary', icon: 'videocam' },
    {
      title: 'Trash',
      url: '/trash',
      icon: 'trash',
      color: 'danger',
      count: this.trashCount,
    },
  ];

  public appAddPages = [
    { title: 'Add Todo', url: '/add-todo', icon: 'add' },
    { title: 'Add Goal', url: '/add-goal', icon: 'ribbon' },
    { title: 'Add Note', url: '/add-note', icon: 'create' },
    { title: 'Add Image', url: '/add-image', icon: 'image' },
    { title: 'Add Video', url: '/add-video', icon: 'tv' },
  ];
}

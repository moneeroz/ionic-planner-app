import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-video-diary',
  templateUrl: './video-diary.page.html',
  styleUrls: ['./video-diary.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class VideoDiaryPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

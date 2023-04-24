import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoDiaryPage } from './video-diary.page';

describe('VideoDiaryPage', () => {
  let component: VideoDiaryPage;
  let fixture: ComponentFixture<VideoDiaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideoDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

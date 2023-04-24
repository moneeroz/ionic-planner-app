import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageDiaryPage } from './image-diary.page';

describe('ImageDiaryPage', () => {
  let component: ImageDiaryPage;
  let fixture: ComponentFixture<ImageDiaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImageDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

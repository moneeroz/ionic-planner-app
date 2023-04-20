import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGoalPage } from './add-goal.page';

describe('AddGoalPage', () => {
  let component: AddGoalPage;
  let fixture: ComponentFixture<AddGoalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddGoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

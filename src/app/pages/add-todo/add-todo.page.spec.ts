import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTodoPage } from './add-todo.page';

describe('AddTodoPage', () => {
  let component: AddTodoPage;
  let fixture: ComponentFixture<AddTodoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

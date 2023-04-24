import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
  {
    path: 'add-todo',
    loadComponent: () =>
      import('./pages/add-todo/add-todo.page').then((m) => m.AddTodoPage),
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('./pages/todos/todos.page').then((m) => m.TodosPage),
  },
  {
    path: 'add-goal',
    loadComponent: () =>
      import('./pages/add-goal/add-goal.page').then((m) => m.AddGoalPage),
  },
  {
    path: 'goals',
    loadComponent: () =>
      import('./pages/goals/goals.page').then((m) => m.GoalsPage),
  },
  {
    path: 'notes',
    loadComponent: () =>
      import('./pages/notes/notes.page').then((m) => m.NotesPage),
  },
  {
    path: 'add-note',
    loadComponent: () =>
      import('./pages/add-note/add-note.page').then((m) => m.AddNotePage),
  },
  {
    path: 'achievements',
    loadComponent: () =>
      import('./pages/achievements/achievements.page').then(
        (m) => m.AchievementsPage,
      ),
  },
  {
    path: 'trash',
    loadComponent: () => import('./pages/trash/trash.page').then( m => m.TrashPage)
  },
];

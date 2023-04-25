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
    path: 'update-todo/:todo_id',
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
    path: 'update-goal/:goal_id',
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
    path: 'update-note/:note_id',
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
    loadComponent: () =>
      import('./pages/trash/trash.page').then((m) => m.TrashPage),
  },
  {
    path: 'image-diary',
    loadComponent: () =>
      import('./pages/image-diary/image-diary.page').then(
        (m) => m.ImageDiaryPage,
      ),
  },
  {
    path: 'video-diary',
    loadComponent: () =>
      import('./pages/video-diary/video-diary.page').then(
        (m) => m.VideoDiaryPage,
      ),
  },
  {
    path: 'add-image',
    loadComponent: () =>
      import('./pages/add-image/add-image.page').then((m) => m.AddImagePage),
  },
  {
    path: 'add-video',
    loadComponent: () =>
      import('./pages/add-video/add-video.page').then((m) => m.AddVideoPage),
  },
];

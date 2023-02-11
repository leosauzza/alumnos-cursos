import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: '/home-page', pathMatch: 'full'},
  { path: 'home-page', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) }, 
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }, 
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

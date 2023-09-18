import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskTemplateComponent} from "./components/task-template/task-template.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-template',
    pathMatch: 'full'
  },
  {
    path: 'task-template',
    component: TaskTemplateComponent
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskTemplateComponent} from "./components/task-template/task-template.component";
import {OverviewComponent} from "./components/overview/overview.component";
import {CustomerOrderComponent} from "./components/customer-order/customer-order.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'task-template',
    component: TaskTemplateComponent
  },
  {
    path: 'customer-order',
    component: CustomerOrderComponent
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

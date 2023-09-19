import { Component } from '@angular/core';
import {Dependency, GanttServiceService, Task } from "../../service/gantt-service.service";

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.scss']
})
export class CustomerOrderComponent {
  tasks: Task[];


  constructor(service: GanttServiceService) {
    this.tasks = service.getTasks1();
  }
}

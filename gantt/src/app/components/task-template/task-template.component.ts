
import { Component } from '@angular/core';

import {Dependency, Task, ResourceAssignment, Resource, GanttServiceService} from "../../service/gantt-service.service";


@Component({
  selector: 'app-task-template',
  templateUrl: './task-template.component.html',
  styleUrls: ['./task-template.component.scss']
})
export class TaskTemplateComponent {
  tasks: Task[];

  dependencies: Dependency[];

  resources: Resource[];

  resourceAssignments: ResourceAssignment[];

  constructor(service: GanttServiceService) {
    this.tasks = service.getTasks();
    this.dependencies = service.getDependencies();
    this.resources = service.getResources();
    this.resourceAssignments = service.getResourceAssignments();
  }

  getImagePath(taskId: number) {
    const imgPath = 'images/employees';
    let img = taskId < 10 ? `0${taskId}` : taskId;
    img = `${imgPath}/${img}.png`;
    return img;
  }

  getTaskColor(taskId: number) {
    const color = taskId % 6;
    return `custom-task-color-${color}`;
  }
}

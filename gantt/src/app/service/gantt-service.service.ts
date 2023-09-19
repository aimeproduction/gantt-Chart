import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task {
  id!: number;

  parentId!: number;

  title!: string;

  start!: Date;

  end!: Date;

  progress?: number;
}


export class Dependency {
  id!: number;

  predecessorId!: number;

  successorId!: number;

  type!: number;
}

export class Resource {
  id!: number;

  text!: string;
}

export class ResourceAssignment {
  id!: number;

  taskId!: number;

  resourceId!: number;
}
const currentDate: Date = new Date(Date.now());
const month: number = currentDate.getMonth();
const year: number = currentDate.getFullYear();

const tasks: Task[] = [{
  id: 1,
  parentId: 0,
  title: 'Analysis/Software Requirements',
  start: new Date(year, month, 1),
  end: new Date(year, month, 28),
  progress: 31,
}, {
  id: 2,
  parentId: 1,
  title: 'Conduct needs analysis',
  start: new Date(year, month, 1),
  end: new Date(year, month, 3),
  progress: 15,
}, {
  id: 3,
  parentId: 1,
  title: 'Draft preliminary software specifications',
  start: new Date(year, month, 3),
  end: new Date(year, month, 5),
  progress: 30,
}, {
  id: 4,
  parentId: 1,
  title: 'Review software specifications/budget with team',
  start: new Date(year, month, 4),
  end: new Date(year, month, 6),
  progress: 60,
}, {
  id: 5,
  parentId: 1,
  title: 'Incorporate feedback on software specifications',
  start: new Date(year, month, 6),
  end: new Date(year, month, 8),
  progress: 45,
}, {
  id: 6,
  parentId: 1,
  title: 'Develop delivery timeline',
  start: new Date(year, month, 8),
  end: new Date(year, month, 14),
  progress: 15,
}, {
  id: 7,
  parentId: 1,
  title: 'Obtain approvals to proceed (concept, timeline, budget)',
  start: new Date(year, month, 14),
  end: new Date(year, month, 20),
  progress: 15,
}, {
  id: 8,
  parentId: 1,
  title: 'Draft preliminary software specifications',
  start: new Date(year, month, 20),
  end: new Date(year, month, 25),
  progress: 0,
}, {
  id: 9,
  parentId: 1,
  title: 'Secure required resources',
  start: new Date(year, month, 25),
  end: new Date(year, month, 28),
  progress: 0,
}];



const tasks1: Task[] = [{
  id: 1,
  parentId: 0,
  title: 'Kunden',
  start: new Date(year, month, 1),
  end: new Date(year, month, 28),
}, {
  id: 2,
  parentId: 1,
  title: 'Kunde 1',
  start: new Date(year, month, 1),
  end: new Date(year, month, 3),
}, {
  id: 3,
  parentId: 1,
  title: 'Kunde 2',
  start: new Date(year, month, 3),
  end: new Date(year, month, 5),
}, {
  id: 4,
  parentId: 1,
  title: 'Kunde 3',
  start: new Date(year, month, 4),
  end: new Date(year, month, 6),
}, {
  id: 5,
  parentId: 1,
  title: 'Kunde 4',
  start: new Date(year, month, 6),
  end: new Date(year, month, 8),
}, {
  id: 6,
  parentId: 2,
  title: 'Auftrag 1',
  start: new Date(year, month, 1),
  end: new Date(year, month, 24),
}, {
  id: 7,
  parentId: 2,
  title: 'Auftrag 2',
  start: new Date(year, month, 4),
  end: new Date(year, month, 20),
}, {
  id: 8,
  parentId: 2,
  title: 'Auftrag 3',
  start: new Date(year, month, 2),
  end: new Date(year, month, 30),
}, {
  id: 9,
  parentId: 6,
  title: 'Details 1',
  start: new Date(year, month, 4),
  end: new Date(year, month, 15),
},
  {
    id: 10,
    parentId: 6,
    title: 'Details 2',
    start: new Date(year, month, 2),
    end: new Date(year, month, 20),
  },
  {
    id: 11,
    parentId: 7,
    title: 'Detail 1',
    start: new Date(year, month, 13),
    end: new Date(year, month, 22),
  },
  {
    id: 12,
    parentId: 3,
    title: 'Auftrag 1',
    start: new Date(year, month, 4),
    end: new Date(year, month, 27),
  },
  {
    id: 13,
    parentId: 3,
    title: 'Auftrag 2',
    start: new Date(year, month, 12),
    end: new Date(year, month, 18),
  },
  {
    id: 14,
    parentId: 13,
    title: 'Detail 1',
    start: new Date(year, month, 13),
    end: new Date(year, month, 18),
  },
  {
    id: 15,
    parentId: 4,
    title: 'Auftrag 1',
    start: new Date(year, month, 5),
    end: new Date(year, month, 20),
  },
  {
    id: 16,
    parentId: 15,
    title: 'Detail 1',
    start: new Date(year, month, 8),
    end: new Date(year, month, 18),
  },
  {
    id: 17,
    parentId: 5,
    title: 'Auftrag 1',
    start: new Date(year, month, 10),
    end: new Date(year, month, 28),
  },
  {
    id: 18,
    parentId: 17,
    title: 'Detail 1',
    start: new Date(year, month, 17),
    end: new Date(year, month, 23),
  }

];

const dependencies: Dependency[] = [{
  id: 1,
  predecessorId: 2,
  successorId: 3,
  type: 0,
}, {
  id: 2,
  predecessorId: 3,
  successorId: 4,
  type: 0,
}, {
  id: 3,
  predecessorId: 4,
  successorId: 5,
  type: 0,
}, {
  id: 4,
  predecessorId: 5,
  successorId: 6,
  type: 0,
}, {
  id: 5,
  predecessorId: 6,
  successorId: 7,
  type: 0,
}, {
  id: 6,
  predecessorId: 7,
  successorId: 8,
  type: 0,
}, {
  id: 7,
  predecessorId: 8,
  successorId: 9,
  type: 0,
}];

const resources: Resource[] = [{
  id: 1,
  text: 'John Heart',
}, {
  id: 2,
  text: 'Paul Peyton',
}, {
  id: 3,
  text: 'Robert Reagan',
}, {
  id: 4,
  text: 'Greta Sims',
}, {
  id: 5,
  text: 'Brett Wade',
}, {
  id: 6,
  text: 'Sandra Johnson',
}, {
  id: 7,
  text: 'Kevin Carter',
}, {
  id: 8,
  text: 'Cynthia Stanwick',
}, {
  id: 9,
  text: 'Olivia Samuelson',
}];

const resourceAssignments: ResourceAssignment[] = [{
  id: 0,
  taskId: 1,
  resourceId: 1,
}, {
  id: 1,
  taskId: 2,
  resourceId: 2,
}, {
  id: 2,
  taskId: 3,
  resourceId: 3,
}, {
  id: 3,
  taskId: 4,
  resourceId: 4,
}, {
  id: 4,
  taskId: 5,
  resourceId: 5,
}, {
  id: 5,
  taskId: 6,
  resourceId: 6,
}, {
  id: 6,
  taskId: 7,
  resourceId: 7,
}, {
  id: 7,
  taskId: 8,
  resourceId: 8,
}, {
  id: 8,
  taskId: 9,
  resourceId: 9,
}];

@Injectable()
export class GanttServiceService {
  getTasks(): Task[] {
    return tasks;
  }

  getTasks1(): Task[] {
    return tasks1;
  }

  getDependencies(): Dependency[] {
    return dependencies;
  }

  getResources(): Resource[] {
    return resources;
  }

  getResourceAssignments(): ResourceAssignment[] {
    return resourceAssignments;
  }
}

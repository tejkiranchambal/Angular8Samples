import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksPageService {

  orionTasks = [
    {
      id: 101,
      projectName: 'Sample Project 1',
      type: 'EXTRACT'
    },
    {
      id: 102,
      projectName: 'Sample Project 2',
      type: 'INDEX'
    },
    {
      id: 103,
      projectName: 'Sample Project 3',
      type: 'EXPLORE'
    },
    {
      id: 104,
      projectName: 'Sample Project 1',
      type: 'ARCHIVE'
    },
    {
      id: 105,
      projectName: 'Sample Project 2',
      type: 'ARCHIVE'
    }
  ];

  orionTasksWithDetails = [
    {
      id: 101,
      status: 'COMPLETED',
      numberOfObjects: 20
    },
    {
      id: 102,
      status: 'ABORTED',
      numberOfObjects: 5400
    },
    {
      id: 103,
      status: 'COMPLETED',
      numberOfObjects: 25600
    },
    {
      id: 104,
      status: 'CANCELED',
      numberOfObjects: 670
    },
    {
      id: 105,
      status: 'COMPLETED',
      numberOfObjects: 550
    }];

  constructor() { }

  getTasks() {
    return this.orionTasks;
  }

  getTaskDetails(id: number) {
    return this.orionTasksWithDetails.find(task => task.id === id);
  }
}

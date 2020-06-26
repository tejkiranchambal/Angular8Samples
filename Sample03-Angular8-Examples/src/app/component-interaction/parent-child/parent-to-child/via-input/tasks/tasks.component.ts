import { Component, OnInit } from '@angular/core';
import {TasksPageService} from '../../../../../services/ci-services/tasks-page.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit {

  selectedTask = 0;
  orionTasks: any;

  constructor(private taskService: TasksPageService) { }

  ngOnInit() {
    this.orionTasks = this.taskService.getTasks();
    this.selectedTask = this.orionTasks[0].id;
  }

  setSelectedTaskID(index: number) {
    this.selectedTask = index;
  }
}

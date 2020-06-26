import {Component, Input} from '@angular/core';
import {TasksPageService} from '../../../../../services/ci-services/tasks-page.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styles: []
})
export class TaskDetailsComponent {

  taskDetails: any;

  // Intercept input from parent component
  @Input()
  set taskID(id: number) {
    this.taskDetails = this.taskService.getTaskDetails(id);
  }

  constructor(private taskService: TasksPageService) { }

}

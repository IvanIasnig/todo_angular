import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task, TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})

export class CompletedComponent implements OnInit {
  taskArray: Task[] = [];
  isLoading = true;
  private tasksSub!: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskArray = this.taskService.getTasks().filter(task => task.isCompleted);
    this.tasksSub = this.taskService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.taskArray = tasks.filter(task => task.isCompleted);
      }
    );
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.tasksSub.unsubscribe();
  }
}



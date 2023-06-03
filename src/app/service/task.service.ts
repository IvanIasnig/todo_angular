import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Task {
  taskName: string;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskArray: Task[] = [{ taskName: 'Esempio task', isCompleted: false }];
  tasksChanged = new Subject<Task[]>();

  constructor() {}

  getTasks() {
    return this.taskArray.slice();
  }

  addTask(task: Task) {
    this.taskArray.push(task);
    this.tasksChanged.next(this.taskArray.slice());
  }

  deleteTask(index: number) {
    this.taskArray.splice(index, 1);
    this.tasksChanged.next(this.taskArray.slice());
  }

  toggleCompletion(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    this.tasksChanged.next(this.taskArray.slice());
  }
}


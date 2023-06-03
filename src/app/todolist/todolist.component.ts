import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Task, TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})

export class TodolistComponent implements OnInit {
  taskArray: Task[] = [];
  isLoading = true;
  private tasksSub!: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasksSub = this.taskService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.taskArray = tasks;
      }
    );
    this.taskArray = this.taskService.getTasks();
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnDestroy(): void {
    this.tasksSub.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const newTask: Task = {
      taskName: form.controls['task'].value,
      isCompleted: false,
    };
    setTimeout(() => {
      this.taskService.addTask(newTask);
    }, 2000);
  }

  onDelete(index: number) {
    this.taskService.deleteTask(index);
  }

  onCheck(index: number) {
    this.taskService.toggleCompletion(index);
  }
}


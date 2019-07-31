import {Component, OnInit} from '@angular/core';
import {Task} from './cockpit/task.model';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allTasks: Task[] = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.loadPosts();

  }

  private loadPosts(){
    this.tasksService.fetchTasks()
      .subscribe((snapshot: Task[]) => {
        this.allTasks = snapshot;
      });
  }

  // onAddTask()
}

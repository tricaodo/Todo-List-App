import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-project';
  allTasks = [];
  onTaskAdded(taskData: {title: string, content: string}) {
    this.allTasks.push({
      title: taskData.title,
      content: taskData.content
    });
  }
}

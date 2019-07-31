import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TasksService} from '../tasks.service';
import {Task} from './task.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @ViewChild('titleInput', {static: true}) titleInput: ElementRef;
  @ViewChild('contentInput', {static: true}) contentInput: ElementRef;
  showForm: boolean = true;

  constructor(private tasksService: TasksService,
              private taskService: TasksService) {
  }

  ngOnInit() {
  }

  onAddTask() {
    const titleStr = this.titleInput.nativeElement.value;
    const contentStr = this.contentInput.nativeElement.value;
    this.tasksService.addTask(new Task(titleStr, contentStr));
  }

  clearForm() {
    this.titleInput.nativeElement.value = '';
    this.contentInput.nativeElement.value = '';
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.css']
})
export class TaskElementComponent implements OnInit {
  @Input() task: {title: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}

import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() taskCreated = new EventEmitter<{title: string, content: string}>();
  @ViewChild('titleInput', {static: true}) titleInput: ElementRef;
  @ViewChild('contentInput', {static: true}) contentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddTask() {
    const titleStr = this.titleInput.nativeElement.value;
    const contentStr = this.contentInput.nativeElement.value;
    this.taskCreated.emit({title: titleStr, content: contentStr});
  }
  clearForm(){
    this.titleInput.nativeElement.value = '';
    this.contentInput.nativeElement.value = '';
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = null;
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
    this.title = null;

  }
}

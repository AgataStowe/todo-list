import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor(private form: NgForm) { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  editarItem() {
    this.item = this.item;
    this.update.emit(this.item);
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });

  }
}

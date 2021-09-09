import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputButtonUnitComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    TodoListService,
    StorageService,
    NgForm
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

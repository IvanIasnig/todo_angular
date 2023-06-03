import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { CompletedComponent } from './completed/completed.component';
import { Route, RouterModule } from '@angular/router';

const Rotte: Route [] = [{
  path: 'completed',
  component: CompletedComponent
},
{
  path: '',
  component: TodolistComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    CompletedComponent
  ],
  imports: [
    RouterModule.forRoot(Rotte),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

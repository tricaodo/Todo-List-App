import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { TaskElementComponent } from './task-element/task-element.component';
import {TasksService} from './tasks.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    TaskElementComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

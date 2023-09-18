import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTemplateComponent } from './components/task-template/task-template.component';
import {DxGanttModule} from "devextreme-angular";
import {GanttServiceService} from "./service/gantt-service.service";

@NgModule({
  declarations: [
    AppComponent,
    TaskTemplateComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
        DxGanttModule
    ],
  providers: [GanttServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

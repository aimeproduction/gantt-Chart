import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTemplateComponent } from './components/task-template/task-template.component';
import {DxGanttModule} from "devextreme-angular";
import {GanttServiceService} from "./service/gantt-service.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { OverviewComponent } from './components/overview/overview.component';
import { CustomerOrderComponent } from './components/customer-order/customer-order.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskTemplateComponent,
    NavbarComponent,
    OverviewComponent,
    CustomerOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DxGanttModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [GanttServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

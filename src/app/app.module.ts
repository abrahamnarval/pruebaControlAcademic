import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { TableComponent } from './components/table/table.component';
import { CalendarComponent } from './components/calendar/calendar.component';

//Views
import { HomeComponent } from './pages/home/home.component';
import { AddDogsComponent } from './pages/add-dogs/add-dogs.component';
import { ListDogsComponent } from './pages/list-dogs/list-dogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    AddDogsComponent,
    ListDogsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
  ],
  providers: [],  
  entryComponents: [ TableComponent ],
  exports: [ CalendarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

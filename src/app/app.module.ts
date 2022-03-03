import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrgChartModule } from 'angular-org-chart';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
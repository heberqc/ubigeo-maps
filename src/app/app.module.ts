import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TerritoryChartComponent } from './components/territory-chart/territory-chart.component';
import { TerritorySelectionComponent } from './components/territory-selection/territory-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    TerritoryChartComponent,
    TerritorySelectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerritoryChartComponent } from './territory-chart/territory-chart.component';
import { TerritorySelectionComponent } from './territory-selection/territory-selection.component';

@NgModule({
  declarations: [
    TerritoryChartComponent,
    TerritorySelectionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TerritoryChartComponent,
    TerritorySelectionComponent,
  ]
})
export class TerritoryModule { }

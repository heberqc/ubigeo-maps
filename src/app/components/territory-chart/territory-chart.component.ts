import { Component, OnInit, Input } from '@angular/core';

import { Territory } from '../../models/territory';

@Component({
  selector: 'app-territory-chart',
  templateUrl: './territory-chart.component.html',
  styleUrls: ['./territory-chart.component.scss']
})
export class TerritoryChartComponent implements OnInit {
  @Input('territory') territory: Territory[];

  constructor() { }

  ngOnInit() {
  }

}

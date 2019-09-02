import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Territory } from '../territory.model';

@Component({
  selector: 'app-territory-selection',
  templateUrl: './territory-selection.component.html',
  styleUrls: ['./territory-selection.component.scss']
})
export class TerritorySelectionComponent implements OnInit {
  @Input('departamentos') departamentos: Territory[];
  @Input('provincias') provincias: Territory[];
  @Input('distritos') distritos: Territory[];
  @Output('territoryInfo') territoryInfo: EventEmitter<any> = new EventEmitter();

  departamento: string;
  provincia: string;

  constructor() {
    this.departamento = null;
    this.provincia = null;
  }

  ngOnInit() {
  }

  onDepartamento(depName: string): void {
    this.departamento = depName;
    this.territoryInfo.emit({ address: `Perú ${depName}`, zoom: 10 });
  }

  onProvincia(provName: string): void {
    this.provincia = provName;
    this.territoryInfo.emit({ address: `Perú ${this.departamento} ${provName}`, zoom: 11 });
  }

  onDistrito(disName: string): void {
    console.log(`${this.departamento} ${this.provincia} ${disName}`);
    this.territoryInfo.emit({ address: `Perú ${this.departamento} ${this.provincia} ${disName}`, zoom: 15 });
  }

  filteredProvincias(): Territory[] {
    if (this.departamento) {
      return this.provincias.filter((prov: Territory) => prov.parentName === this.departamento);
    }
    return [];
  }

  filteredDistritos(): Territory[] {
    if (this.provincia) {
      return this.distritos.filter((dist: Territory) => dist.parentName === this.provincia);
    }
    return [];
  }

}

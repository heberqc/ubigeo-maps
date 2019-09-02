import { Component, OnInit, Input } from '@angular/core';

import { Territory } from '../../models/territory';

@Component({
  selector: 'app-territory-selection',
  templateUrl: './territory-selection.component.html',
  styleUrls: ['./territory-selection.component.scss']
})
export class TerritorySelectionComponent implements OnInit {
  @Input('departamentos') departamentos: Territory[];
  @Input('provincias') provincias: Territory[];
  @Input('distritos') distritos: Territory[];

  departamento: string;
  provincia: string;

  constructor() {
    this.departamento = null;
    this.provincia = null;
  }

  ngOnInit() {
  }

  onDepartamento(territorio: Territory): void {
    this.departamento = territorio.name;
  }
  
  onProvincia(territorio: Territory): void {
    this.provincia = territorio.name;
  }
  
  onDistrito(territorio: Territory): void {
    console.log(`${this.departamento} ${this.provincia} ${territorio.name}`);
  }

  filteredProvincias(): Territory[] {
    return this.provincias.filter((prov: Territory) => prov.parentName === this.departamento);
  }

  filteredDistritos(): Territory[] {
    return this.distritos.filter((dist: Territory) => dist.parentName === this.provincia);
  }

}

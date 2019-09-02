import { Component } from '@angular/core';

import { UbigeoService } from './services/ubigeo.service';

import { Territory } from './models/territory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ubigeo';
  departamentos: Territory[];
  provincias: Territory[];
  distritos: Territory[];

  constructor(private ubigeo: UbigeoService) {
  }

  public ngOnInit(): void {
    this.loadUbigeoData();
  }

  public loadUbigeoData(): void {
    this.ubigeo.getUbigeos().subscribe(
      ({ departamentos, provincias, distritos }) => {
      this.departamentos = departamentos;
      this.provincias = provincias;
      this.distritos = distritos;
      console.log('{ departamentos, provincias, distritos }:', { departamentos, provincias, distritos })
      }, 
      error => {
        console.error(error);
      }
    );
  }
}

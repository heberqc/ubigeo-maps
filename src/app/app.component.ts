import { Component, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';

import { TerritoryService } from './territory/territory.service';

import { Territory } from './territory/territory.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  geocoder: google.maps.Geocoder;
  map: google.maps.Map;
  title = 'Ubigeos';
  departamentos: Territory[];
  provincias: Territory[];
  distritos: Territory[];
  showTables: boolean;
  // initial country
  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(-12.046374, -77.042793),
    zoom: 6,
  };

  constructor(private ubigeo: TerritoryService) {
    this.showTables = true;
  }

  public ngOnInit(): void {
    this.loadUbigeoData();
    
  }

  ngAfterViewInit(): void {
    this.mapInitializer();
   }

  mapInitializer() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
  }

  public loadUbigeoData(): void {
    this.ubigeo.getUbigeos().subscribe(
      ({ departamentos, provincias, distritos }) => {
      this.departamentos = departamentos;
      this.provincias = provincias;
      this.distritos = distritos;
      },
      error => {
        console.error(error);
      }
    );
  }

  lookInMap(event: any): void {
    this.geocoder = new google.maps.Geocoder();
    this.geocoder.geocode({ address: event.address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        this.map.setCenter(results[0].geometry.location);
        this.map.setZoom(event.zoom);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  toogleTables() {
    this.showTables = !this.showTables;
  }
}

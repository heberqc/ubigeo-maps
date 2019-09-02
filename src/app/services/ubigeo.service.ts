import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Territory } from '../models/territory';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
  private api = 'https://gist.githubusercontent.com/heberqc/451b7ed0d56f37ddd56eb382470162ba/raw/ubigeos.txt';

  constructor(private http: HttpClient) { }

  getUbigeos() {
    return this.http.get(this.api, { responseType: 'text' }).pipe(
      map(data => {
        const departamentos: Territory[] = [];
        const provincias: Territory[] = [];
        const distritos: Territory[] = [];
        // Divide data in lines
        const textLines = data.split('\n');
        textLines.forEach(line => {
          // Retrieve territory data
          const [
            code_dep,
            name_dep,
            code_prov,
            name_prov,
            code_dis,name_dis
          ] = line.match(/([0-9]{2,3}|[A-Za-z]+\s?[A-Za-z]+)/g);
          // Arrays load
          if (code_dis) {
            distritos.push({
              code: code_dis,
              name: name_dis,
              parentCode: code_prov,
              parentName: name_prov,
            })
          } else if (code_prov) {
            provincias.push({
              code: code_prov,
              name: name_prov,
              parentCode: code_dep,
              parentName: name_dep,
            })
          } else if (code_dep) {
            departamentos.push({
              code: code_dep,
              name: name_dep,
              parentCode: '-',
              parentName: '-',
            })
          }
        })
        return ({
          departamentos,
          provincias,
          distritos,
        })
      }),
    );
  }
}

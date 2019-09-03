import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Territory, TerritoryType } from './territory.model';

@Injectable({
  providedIn: 'root'
})
export class TerritoryService {
  private api = 'https://gist.githubusercontent.com/heberqc/451b7ed0d56f37ddd56eb382470162ba/raw/ubigeos.txt';

  constructor(private http: HttpClient) { }

  getTerritoryData(line: string): Territory {
    const [
      code_dep,
      name_dep,
      code_prov,
      name_prov,
      code_dis,
      name_dis,
    ] = line.match(/([0-9]{2,3}|[A-Za-z]+(\s[A-Za-z]+)*)/g);
    if (code_dis) {
      return ({
        code: code_dis,
        name: name_dis,
        parentCode: code_prov,
        parentName: name_prov,
        type: TerritoryType.Distrito,
      })
    } else if (code_prov) {
      return ({
        code: code_prov,
        name: name_prov,
        parentCode: code_dep,
        parentName: name_dep,
        type: TerritoryType.Provincia,
      })
    } else if (code_dep) {
      return ({
        code: code_dep,
        name: name_dep,
        parentCode: '-',
        parentName: '-',
        type: TerritoryType.Departamento,
      })
    }
  }

  getUbigeos() {
    return this.http.get(this.api, { responseType: 'text' }).pipe(
      map(data => {
        const departamentos: Territory[] = [];
        const provincias: Territory[] = [];
        const distritos: Territory[] = [];
        // Divide data in lines
        const textLines = data.split('\n');
        // Process lines
        textLines.forEach(line => {
          const territory = this.getTerritoryData(line);
          switch (territory.type) {
            case TerritoryType.Departamento:
              departamentos.push(territory);
              break;
            case TerritoryType.Provincia:
              provincias.push(territory);
              break;
            case TerritoryType.Distrito:
              distritos.push(territory);
              break;
          }
        })
        // Send the parsed data
        return ({
          departamentos,
          provincias,
          distritos,
        })
      }),
    );
  }
}

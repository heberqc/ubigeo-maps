import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TerritoryService } from './territory.service';
import { TerritoryType } from './territory.model';

describe('TerritoryService', () => {
  let service: TerritoryService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  beforeEach(async(() => {
    service = TestBed.get(TerritoryService);
  }))

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('read "Las Piedras" data correctly', async(() => {
    const line = '"17 Madre de Dios / 01 Tambopata / 03 Las Piedras"';
    expect(service.getTerritoryData(line)).toEqual({
      code: '03',
      name: 'Las Piedras',
      parentCode: '01',
      parentName: 'Tambopata',
      type: TerritoryType.Distrito,
    })
  }))

  it('read "Santa Cruz de Chuca" data correctly', async(() => {
    const line = '"13 La Libertad / 10 Santiago de Chuco / "';
    expect(service.getTerritoryData(line)).toEqual({
      code: '10',
      name: 'Santiago de Chuco',
      parentCode: '13',
      parentName: 'La Libertad',
      type: TerritoryType.Provincia,
    })
  }))

  it('read "La Libertad" data correctly', async(() => {
    const line = '"13 La Libertad / / "';
    expect(service.getTerritoryData(line)).toEqual({
      code: '13',
      name: 'La Libertad',
      parentCode: '-',
      parentName: '-',
      type: TerritoryType.Departamento,
    })
  }))
});

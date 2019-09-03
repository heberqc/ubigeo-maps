import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TerritoryService } from './territory.service';

describe('TerritoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: TerritoryService = TestBed.get(TerritoryService);
    expect(service).toBeTruthy();
  });
});

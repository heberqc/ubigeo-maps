import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryChartComponent } from './territory-chart.component';

describe('TerritoryChartComponent', () => {
  let component: TerritoryChartComponent;
  let fixture: ComponentFixture<TerritoryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritoryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

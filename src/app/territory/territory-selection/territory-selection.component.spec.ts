import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritorySelectionComponent } from './territory-selection.component';

describe('TerritorySelectionComponent', () => {
  let component: TerritorySelectionComponent;
  let fixture: ComponentFixture<TerritorySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritorySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritorySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

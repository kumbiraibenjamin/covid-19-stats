import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatsCardsComponent } from './covid-stats-cards.component';

describe('CovidStatsCardsComponent', () => {
  let component: CovidStatsCardsComponent;
  let fixture: ComponentFixture<CovidStatsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidStatsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidStatsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

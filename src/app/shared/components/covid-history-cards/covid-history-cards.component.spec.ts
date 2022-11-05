import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidHistoryCardsComponent } from './covid-history-cards.component';

describe('CovidHistoryCardsComponent', () => {
  let component: CovidHistoryCardsComponent;
  let fixture: ComponentFixture<CovidHistoryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidHistoryCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidHistoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

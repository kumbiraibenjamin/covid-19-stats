import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatCardComponent } from './covid-stat-card.component';

describe('CovidStatCardComponent', () => {
  let component: CovidStatCardComponent;
  let fixture: ComponentFixture<CovidStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidStatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

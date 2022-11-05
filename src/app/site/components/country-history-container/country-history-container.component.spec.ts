import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHistoryContainerComponent } from './country-history-container.component';

describe('CountryHistoryContainerComponent', () => {
  let component: CountryHistoryContainerComponent;
  let fixture: ComponentFixture<CountryHistoryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryHistoryContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryHistoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

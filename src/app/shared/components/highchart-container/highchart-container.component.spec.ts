import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartContainerComponent } from './highchart-container.component';

describe('HighchartContainerComponent', () => {
  let component: HighchartContainerComponent;
  let fixture: ComponentFixture<HighchartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighchartContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighchartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

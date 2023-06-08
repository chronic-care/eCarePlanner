import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrdersPanelComponent } from './active-orders-panel.component';

describe('ActiveOrdersPanelComponent', () => {
  let component: ActiveOrdersPanelComponent;
  let fixture: ComponentFixture<ActiveOrdersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveOrdersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveOrdersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

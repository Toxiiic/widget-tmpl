import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempWidgetNameComponent } from './temp-widget-name.component';

describe('TempWidgetNameComponent', () => {
  let component: TempWidgetNameComponent;
  let fixture: ComponentFixture<TempWidgetNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempWidgetNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempWidgetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

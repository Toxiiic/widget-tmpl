import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplWidgetNameComponent } from './tmpl-widget-name.component';

describe('TmplWidgetNameComponent', () => {
  let component: TmplWidgetNameComponent;
  let fixture: ComponentFixture<TmplWidgetNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmplWidgetNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmplWidgetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

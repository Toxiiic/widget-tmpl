import { TestBed } from '@angular/core/testing';

import { TmplWidgetNameService } from './tmpl-widget-name.service';

describe('TmplWidgetNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TmplWidgetNameService = TestBed.get(TmplWidgetNameService);
    expect(service).toBeTruthy();
  });
});

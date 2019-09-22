import { TestBed } from '@angular/core/testing';

import { TempWidgetNameService } from './temp-widget-name.service';

describe('TempWidgetNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempWidgetNameService = TestBed.get(TempWidgetNameService);
    expect(service).toBeTruthy();
  });
});

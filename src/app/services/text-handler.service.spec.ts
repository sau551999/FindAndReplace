import { TestBed } from '@angular/core/testing';

import { TextHandlerService } from './text-handler.service';

describe('TextHandlerService', () => {
  let service: TextHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

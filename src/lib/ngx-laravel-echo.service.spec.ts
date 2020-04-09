import { TestBed } from '@angular/core/testing';

import { NgxLaravelEchoService } from './ngx-laravel-echo.service';

describe('NgxLaravelEchoService', () => {
  let service: NgxLaravelEchoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLaravelEchoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

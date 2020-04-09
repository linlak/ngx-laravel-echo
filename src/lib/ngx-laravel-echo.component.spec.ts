import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLaravelEchoComponent } from './ngx-laravel-echo.component';

describe('NgxLaravelEchoComponent', () => {
  let component: NgxLaravelEchoComponent;
  let fixture: ComponentFixture<NgxLaravelEchoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLaravelEchoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLaravelEchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

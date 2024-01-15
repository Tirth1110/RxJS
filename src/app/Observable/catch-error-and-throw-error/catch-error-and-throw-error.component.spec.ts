import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErrorAndThrowErrorComponent } from './catch-error-and-throw-error.component';

describe('CatchErrorAndThrowErrorComponent', () => {
  let component: CatchErrorAndThrowErrorComponent;
  let fixture: ComponentFixture<CatchErrorAndThrowErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchErrorAndThrowErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchErrorAndThrowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

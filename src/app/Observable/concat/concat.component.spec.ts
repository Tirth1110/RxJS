import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatComponent } from './ConcatComponent';

describe('ConcatComponent', () => {
  let component: ConcatComponent;
  let fixture: ComponentFixture<ConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcatComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

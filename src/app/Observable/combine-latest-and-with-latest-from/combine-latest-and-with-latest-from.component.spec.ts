import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestAndWithLatestFromComponent } from './combine-latest-and-with-latest-from.component';

describe('CombineLatestAndWithLatestFromComponent', () => {
  let component: CombineLatestAndWithLatestFromComponent;
  let fixture: ComponentFixture<CombineLatestAndWithLatestFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestAndWithLatestFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLatestAndWithLatestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

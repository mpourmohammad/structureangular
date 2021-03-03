import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagmentComponent } from './usermanagment.component';

describe('UsermanagmentComponent', () => {
  let component: UsermanagmentComponent;
  let fixture: ComponentFixture<UsermanagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

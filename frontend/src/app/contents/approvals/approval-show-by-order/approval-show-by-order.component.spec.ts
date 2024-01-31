import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalShowByOrderComponent } from './approval-show-by-order.component';

describe('ApprovalShowByOrderComponent', () => {
  let component: ApprovalShowByOrderComponent;
  let fixture: ComponentFixture<ApprovalShowByOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalShowByOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalShowByOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

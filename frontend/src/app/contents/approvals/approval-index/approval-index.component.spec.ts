import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalIndexComponent } from './approval-index.component';

describe('ApprovalIndexComponent', () => {
  let component: ApprovalIndexComponent;
  let fixture: ComponentFixture<ApprovalIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

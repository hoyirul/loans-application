import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalByUserComponent } from './approval-by-user.component';

describe('ApprovalByUserComponent', () => {
  let component: ApprovalByUserComponent;
  let fixture: ComponentFixture<ApprovalByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './contents/dashboard/dashboard.component';
import { VehicleIndexComponent } from './contents/vehicles/vehicle-index/vehicle-index.component';
import { VehicleCreateComponent } from './contents/vehicles/vehicle-create/vehicle-create.component';
import { VehicleEditComponent } from './contents/vehicles/vehicle-edit/vehicle-edit.component';
import { OrderCreateComponent } from './contents/orders/order-create/order-create.component';
import { OrderIndexComponent } from './contents/orders/order-index/order-index.component';
import { UserIndexComponent } from './contents/users/user-index/user-index.component';
import { ApprovalIndexComponent } from './contents/approvals/approval-index/approval-index.component';
import { ApprovalCreateComponent } from './contents/approvals/approval-create/approval-create.component';
import { ApprovalByUserComponent } from './contents/approvals/approval-by-user/approval-by-user.component';
import { ApprovalShowByOrderComponent } from './contents/approvals/approval-show-by-order/approval-show-by-order.component';
import { OrderReportComponent } from './contents/reports/order-report/order-report.component';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'vehicles', children: [
    { path: '', component: VehicleIndexComponent },
    { path: 'create', component: VehicleCreateComponent },
    { path: 'edit/:id', component: VehicleEditComponent },
  ]},
  { path: 'orders', children: [
    { path: '', component: OrderIndexComponent },
    { path: 'create', component: OrderCreateComponent },
    { path: 'reports', component: OrderReportComponent },
  ]},
  { path: 'users', component: UserIndexComponent },
  { path: 'approvals', children: [
    { path: '', component: ApprovalIndexComponent },
    { path: 'create/:order_id', component: ApprovalCreateComponent },
    { path: 'by/order/:order_id', component: ApprovalShowByOrderComponent },
    { path: 'by/user', component: ApprovalByUserComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

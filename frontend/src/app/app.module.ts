import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// http client module
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { DashboardComponent } from './contents/dashboard/dashboard.component';
import { AuthenticationComponent } from './contents/authentication/authentication.component';
import { VehicleIndexComponent } from './contents/vehicles/vehicle-index/vehicle-index.component';
import { VehicleCreateComponent } from './contents/vehicles/vehicle-create/vehicle-create.component';
import { VehicleEditComponent } from './contents/vehicles/vehicle-edit/vehicle-edit.component';
import { OrderIndexComponent } from './contents/orders/order-index/order-index.component';
import { OrderCreateComponent } from './contents/orders/order-create/order-create.component';
import { UserIndexComponent } from './contents/users/user-index/user-index.component';
import { ApprovalCreateComponent } from './contents/approvals/approval-create/approval-create.component';
import { ApprovalIndexComponent } from './contents/approvals/approval-index/approval-index.component';
import { ApprovalByUserComponent } from './contents/approvals/approval-by-user/approval-by-user.component';
import { ApprovalShowByOrderComponent } from './contents/approvals/approval-show-by-order/approval-show-by-order.component';
import { OrderReportComponent } from './contents/reports/order-report/order-report.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    AuthenticationComponent,
    VehicleIndexComponent,
    VehicleCreateComponent,
    VehicleEditComponent,
    OrderIndexComponent,
    OrderCreateComponent,
    UserIndexComponent,
    ApprovalCreateComponent,
    ApprovalIndexComponent,
    ApprovalByUserComponent,
    ApprovalShowByOrderComponent,
    OrderReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

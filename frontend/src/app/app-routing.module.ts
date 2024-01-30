import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './contents/dashboard/dashboard.component';
import { VehicleIndexComponent } from './contents/vehicles/vehicle-index/vehicle-index.component';
import { VehicleCreateComponent } from './contents/vehicles/vehicle-create/vehicle-create.component';
import { VehicleEditComponent } from './contents/vehicles/vehicle-edit/vehicle-edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'vehicles', children: [
    { path: '', component: VehicleIndexComponent },
    { path: 'create', component: VehicleCreateComponent },
    { path: 'edit/:id', component: VehicleEditComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

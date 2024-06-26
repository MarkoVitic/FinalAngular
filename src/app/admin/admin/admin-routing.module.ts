import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminObjectsComponent } from '../admin-objects-delete/admin-objects.component';
import { AdminApartmentComponent } from '../admin-apartment/admin-apartment.component';
import { ObjectsEditCreateComponent } from './objects-edit-create/objects-edit-create.component';

const routes: Routes = [
  { path: 'admin-object', component: AdminObjectsComponent },
  { path: 'admin-object/create', component: ObjectsEditCreateComponent },
  { path: 'admin-object/create/:id', component: ObjectsEditCreateComponent },
  { path: 'admin-apartment', component: AdminApartmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

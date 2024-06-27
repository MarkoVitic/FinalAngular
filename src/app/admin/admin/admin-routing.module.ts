import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminObjectsComponent } from '../admin-objects-delete/admin-objects.component';
import { AdminApartmentComponent } from '../admin-apartment-delete/admin-apartment.component';
import { ObjectsEditCreateComponent } from './objects-edit-create/objects-edit-create.component';
import { ApartmentEditCreateComponent } from '../apartment-edit-create/apartment-edit-create.component';

const routes: Routes = [
  { path: 'admin-object', component: AdminObjectsComponent },
  { path: 'admin-object/create', component: ObjectsEditCreateComponent },
  { path: 'admin-object/create/:id', component: ObjectsEditCreateComponent },
  { path: ':objectId/admin-apartment', component: AdminApartmentComponent },
  {
    path: ':objectId/admin-apartment/create',
    component: ApartmentEditCreateComponent,
  },
  {
    path: ':objectId/admin-apartment/create/:apartmanId',
    component: ApartmentEditCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

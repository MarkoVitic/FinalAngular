import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminApartmentComponent } from '../admin-apartment-delete/admin-apartment.component';
import { AdminObjectsComponent } from '../admin-objects-delete/admin-objects.component';
import { ObjectsEditCreateComponent } from './objects-edit-create/objects-edit-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartmentEditCreateComponent } from '../apartment-edit-create/apartment-edit-create.component';

@NgModule({
  declarations: [
    AdminApartmentComponent,
    AdminObjectsComponent,
    ObjectsEditCreateComponent,
    ApartmentEditCreateComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [
    AdminApartmentComponent,
    AdminObjectsComponent,
    ObjectsEditCreateComponent,
  ],
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from '../home/home.component';
import { ApartmentsComponent } from '../apartments/apartments.component';
import { ApartmentDetailComponent } from '../apartment-detail/apartment-detail.component';

@NgModule({
  declarations: [HomeComponent, ApartmentsComponent, ApartmentDetailComponent],
  imports: [CommonModule, PagesRoutingModule],
  exports: [HomeComponent, ApartmentsComponent, ApartmentDetailComponent],
})
export class PagesModule {}

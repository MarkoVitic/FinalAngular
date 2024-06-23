import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from '../home/home.component';
import { ApartmentsComponent } from '../apartments/apartments.component';
import { ApartmentDetailComponent } from '../apartment-detail/apartment-detail.component';
import { LoginComponent } from '../login/login.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ApartmentsComponent,
    ApartmentDetailComponent,
    LoginComponent,
    RegisterUserComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [
    HomeComponent,
    ApartmentsComponent,
    ApartmentDetailComponent,
    LoginComponent,
    RegisterUserComponent,
  ],
})
export class PagesModule {}

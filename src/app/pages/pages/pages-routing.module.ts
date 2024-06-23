import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ApartmentsComponent } from '../apartments/apartments.component';
import { ApartmentDetailComponent } from '../apartment-detail/apartment-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { RegisterUserComponent } from '../register-user/register-user.component';

const routes: Routes = [
  // { path: '', redirectTo: '/objekti', pathMatch: 'full' },
  { path: 'objekti', component: HomeComponent },
  {
    path: 'objekti/:id/apartman',
    component: ApartmentsComponent,
  },
  {
    path: 'objekti/:id/:apartmanId',
    component: ApartmentDetailComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

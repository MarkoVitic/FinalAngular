import { Component, OnInit } from '@angular/core';
import { RegistrujseServicesService } from '../../services/registrujse-services/registrujse-services.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  userEmail: string = '';

  constructor(
    private registerUserService: RegistrujseServicesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loggedIn = this.registerUserService.isLogedIn();
    if (this.loggedIn) {
      this.userEmail = this.registerUserService.getUserData().email;
      if (this.registerUserService.getUserData().role == true) {
        this.router.navigate(['/admin-object']);
      } else this.router.navigate(['/']);
    }
  }

  logout() {
    this.registerUserService.logOut();
    this.ngOnInit();
  }
}

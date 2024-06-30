import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Korisnik } from '../../models/korisnik';
import { RegistrujseServicesService } from '../../services/registrujse-services/registrujse-services.service';
import { Router } from '@angular/router';
Korisnik;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginUserForm: FormGroup = new FormGroup({});
  korisnik: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private registracijaService: RegistrujseServicesService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.loginUserForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.korisnik = {
      email: this.loginUserForm.get('email').value,
      password: this.loginUserForm.get('password').value,
    };

    this.registracijaService.login(this.korisnik).subscribe((data: any) => {
      if (data.token) {
        localStorage.setItem('data-token', data.token);
      }
    });
    this.route.navigate(['/']);
  }
}

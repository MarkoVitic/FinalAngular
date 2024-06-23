import { Korisnik } from './../../models/korisnik';

import { RegistrujseServicesService } from './../../services/registrujse-services/registrujse-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent implements OnInit {
  registerUserForm: FormGroup = new FormGroup({});
  korisnik: Korisnik = new Korisnik();

  constructor(
    private formBuilder: FormBuilder,
    private registracijaService: RegistrujseServicesService
  ) {}
  ngOnInit(): void {
    this.registerUserForm = this.formBuilder.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      drzava: ['', Validators.required],
      grad: ['', Validators.required],
      telefon: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      comformpassword: ['', Validators.required],
    });
  }

  register() {
    if (
      this.registerUserForm.valid &&
      this.registerUserForm.get('password').value ==
        this.registerUserForm.get('comformpassword').value
    ) {
      this.korisnik = {
        imeKorisnika: this.registerUserForm.get('ime').value,
        prezimeKorisnika: this.registerUserForm.get('prezime').value,
        drzava: this.registerUserForm.get('drzava').value,
        grad: this.registerUserForm.get('grad').value,
        telefon: this.registerUserForm.get('telefon').value,
        email: this.registerUserForm.get('email').value,
        password: this.registerUserForm.get('password').value,
      };

      this.registracijaService.createUser(this.korisnik).subscribe();
      alert('Uspjesno ste kreirali nalog');
    } else {
      alert('Provjerite da li ste Password unijeli Dobro');
      console.log('invalide');
    }
  }
}

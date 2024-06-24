import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KontaktForma } from '../../models/kontaktForma';
import { KontaktFormaService } from '../../services/kontaktForma/kontakt-forma.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent implements OnInit {
  kontaktForma: FormGroup = new FormGroup({});
  kontaktPoruka: KontaktForma = new KontaktForma();
  constructor(
    private formBuilder: FormBuilder,
    private kontaktFormaServices: KontaktFormaService
  ) {}
  ngOnInit(): void {
    this.kontaktForma = this.formBuilder.group({
      ime: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefon: ['', Validators.required],
      poruka: ['', Validators.required],
    });
  }

  sendMsg() {
    if (this.kontaktForma.valid) {
      this.kontaktFormaServices
        .createUserQuestion(this.kontaktForma.value)
        .subscribe();
      alert('uspjesno ste posllai poruku');
    } else {
      alert('molimo Vas popunite ispravno trazena polja ');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ObjektiServicesService } from '../../../services/objekti-services/objekti-services.service';
import { ActivatedRoute } from '@angular/router';
import { Objekti } from '../../../models/objekti';

@Component({
  selector: 'app-objects-edit-create',
  templateUrl: './objects-edit-create.component.html',
  styleUrl: './objects-edit-create.component.css',
})
export class ObjectsEditCreateComponent implements OnInit {
  createObjectForm: FormGroup = new FormGroup({});
  id: any;

  constructor(
    private form: FormBuilder,
    private objService: ObjektiServicesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.createObjectForm = this.form.group({
      nazivApartmana: ['', Validators.required],
      drzava: ['', Validators.required],
      grad: ['', Validators.required],
      ulica: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefon: ['', Validators.required],
      opis: ['', Validators.required],
    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      let objcet;
      this.objService
        .getSingleObjekat(parseInt(this.id))
        .subscribe((data) => this.createObjectForm.patchValue(data));
    }
  }

  createObject() {
    if (this.createObjectForm.valid) {
      if (!this.id) {
        console.log(this.id, 'ako nije update');
        this.objService.createObject(this.createObjectForm.value).subscribe();
        // this.createObjectForm.reset();
      } else {
        console.log(this.id, this.createObjectForm.value, 'ako jeste update');
        this.objService
          .updateObject(this.id, this.createObjectForm.value)
          .subscribe();
        // this.createObjectForm.reset();
      }
    }
  }
}

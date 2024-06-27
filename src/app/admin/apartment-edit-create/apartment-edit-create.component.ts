import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apartman } from '../../models/apartman';
import { ApartmaniServicesService } from '../../services/apartmani-services/apartmani-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment-edit-create',
  templateUrl: './apartment-edit-create.component.html',
  styleUrl: './apartment-edit-create.component.css',
})
export class ApartmentEditCreateComponent implements OnInit {
  apartmentForm: FormGroup = new FormGroup({});

  hotelId: number;
  apartmanId: string;

  constructor(
    private formBuilder: FormBuilder,
    private apartmanService: ApartmaniServicesService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.apartmentForm = this.formBuilder.group({
      naziv_apartmana: ['', Validators.required],
      opis_apartmanA: ['', Validators.required],
      sprat_apartmana: ['', Validators.required],
      cijena_po_danu: ['', Validators.required],
      max_broj_osoba: ['', Validators.required],
    });
    this.hotelId = parseInt(this.activeRoute.snapshot.paramMap.get('objectId'));
    this.apartmanId = this.activeRoute.snapshot.paramMap.get('apartmanId');
    console.log(this.apartmanId);

    if (this.apartmanId) {
      this.apartmanService
        .getApartment(this.hotelId, this.apartmanId)
        .subscribe((data: any) => {
          this.apartmentForm.patchValue(data[0]);
        });
    }
  }

  createApartment() {
    if (!this.apartmanId) {
      this.apartmanService
        .createApartment(this.hotelId, this.apartmentForm.value)
        .subscribe();
    }
    console.log(this.apartmanId);
    if (this.apartmanId && this.apartmanId.length > 0) {
      console.log(this.apartmentForm.value);
      this.apartmanService
        .updateApartment(
          this.hotelId,
          this.apartmanId,
          this.apartmentForm.value
        )
        .subscribe();
    }
  }
}

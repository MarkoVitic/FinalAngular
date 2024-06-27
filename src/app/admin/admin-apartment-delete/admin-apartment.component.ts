import { Apartman } from '../../models/apartman';
import { ApartmaniServicesService } from '../../services/apartmani-services/apartmani-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-apartment',
  templateUrl: './admin-apartment.component.html',
  styleUrl: './admin-apartment.component.css',
})
export class AdminApartmentComponent implements OnInit {
  apartmani: Apartman[] = [];
  objectId: number;
  apartmanId: number;
  constructor(
    private apartmentService: ApartmaniServicesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.objectId = parseInt(this.route.snapshot.paramMap.get('objectId'));

    this.apartmentService
      .getAllApartments(this.objectId)
      .subscribe((data) => (this.apartmani = data));
  }

  deleteApartment(idObjekat: string) {
    return this.apartmentService
      .deleteApartment(this.objectId, idObjekat)
      .subscribe();
  }
}

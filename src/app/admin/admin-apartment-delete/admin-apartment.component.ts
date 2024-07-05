import { Apartman } from '../../models/apartman';
import { ApartmaniServicesService } from '../../services/apartmani-services/apartmani-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.objectId = parseInt(
      this.activeRoute.snapshot.paramMap.get('objectId')
    );
    if (this.objectId) {
      this.apartmentService
        .getAllApartments(this.objectId)
        .subscribe((data) => (this.apartmani = data));
    }
  }

  deleteApartment(idObjekat: string) {
    console.log(this.objectId);
    this.apartmentService
      .deleteApartment(this.objectId, idObjekat)
      .subscribe((data) => {
        if (data) {
          this.ngOnInit();
          // this.router.navigate([`${this.objectId}/admin-apartment`]);
        }
      });
  }
}

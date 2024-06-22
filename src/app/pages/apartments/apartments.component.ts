import { ObjektiServicesService } from './../../services/objekti-services/objekti-services.service';
import { Component, OnInit } from '@angular/core';
import { Apartman } from '../../models/apartman';
import { ApartmaniServicesService } from '../../services/apartmani-services/apartmani-services.service';
import { ActivatedRoute } from '@angular/router';
import { Objekti } from '../../models/objekti';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.css',
})
export class ApartmentsComponent implements OnInit {
  apartmani: Apartman[] = [];
  objekat: Objekti;
  constructor(
    private apartmanServices: ApartmaniServicesService,
    private activatedRoute: ActivatedRoute,
    private objektiServicesService: ObjektiServicesService
  ) {}
  ngOnInit(): void {
    let hotelId: number = 0;
    let objekatId: number;
    this.activatedRoute.params.subscribe((data) => {
      hotelId = data['id'];
    });
    this.apartmanServices.getAllApartments(hotelId).subscribe((data) => {
      this.apartmani = data;
    });

    this.objektiServicesService
      .getSingleObjekat(hotelId)
      .subscribe((data) => (this.objekat = data));
  }
}

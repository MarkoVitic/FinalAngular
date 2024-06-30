import { Router } from '@angular/router';
import { Objekti } from '../../models/objekti';

import { ObjektiServicesService } from '../../services/objekti-services/objekti-services.service';
import { Component, OnInit } from '@angular/core';
import { RegistrujseServicesService } from '../../services/registrujse-services/registrujse-services.service';

@Component({
  selector: 'app-admin-objects',
  templateUrl: './admin-objects.component.html',
  styleUrl: './admin-objects.component.css',
})
export class AdminObjectsComponent implements OnInit {
  allObjects: Objekti[] = [];
  isAdmin: boolean = false;
  constructor(
    private objService: ObjektiServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.objService
      .getAllObjekti()
      .subscribe((data) => (this.allObjects = data));
  }

  deleteOvjekat(idObject: any) {
    console.log(idObject, 'delete');
    this.objService.deleteObject(parseInt(idObject)).subscribe();
    this.allObjects = this.allObjects.filter((item) => item.id != idObject);
  }
}

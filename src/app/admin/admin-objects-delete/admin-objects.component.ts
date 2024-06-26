import { Router } from '@angular/router';
import { Objekti } from '../../models/objekti';

import { ObjektiServicesService } from '../../services/objekti-services/objekti-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-objects',
  templateUrl: './admin-objects.component.html',
  styleUrl: './admin-objects.component.css',
})
export class AdminObjectsComponent implements OnInit {
  allObjects: Objekti[] = [];
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
    this.objService.deleteObject(parseInt(idObject)).subscribe();
    this.allObjects = this.allObjects.filter((item) => item.id != idObject);
  }
}

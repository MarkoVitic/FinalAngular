import { Component, OnInit } from '@angular/core';
import { ObjektiServicesService } from '../../services/objekti-services/objekti-services.service';
import { Objekti } from '../../models/objekti';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  objekti: Objekti[] = [];

  constructor(private objektiService: ObjektiServicesService) {}
  ngOnInit(): void {
    this.objektiService
      .getAllObjekti()
      .subscribe((objekat) => (this.objekti = objekat));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Apartman } from '../../models/apartman';

@Injectable({
  providedIn: 'root',
})
export class ApartmaniServicesService {
  private apiUrl = 'http://127.0.0.1:7000/api/v1/objekti';

  constructor(private http: HttpClient) {}

  getAllApartments(id: number) {
    return this.http.get<Apartman[]>(this.apiUrl + `/${id}` + '/apartman');
  }
}

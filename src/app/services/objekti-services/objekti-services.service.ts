import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Objekti } from '../../models/objekti';

@Injectable({
  providedIn: 'root',
})
export class ObjektiServicesService {
  private apiUrl = 'http://127.0.0.1:7000/api/v1/objekti';

  constructor(private http: HttpClient) {}

  getAllObjekti() {
    return this.http.get<Objekti[]>(this.apiUrl);
  }
  getSingleObjekat(id: number) {
    return this.http.get<Objekti>(this.apiUrl + `/${id}`);
  }
}

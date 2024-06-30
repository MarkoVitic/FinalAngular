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
  getApartment(idHotel: number, idApartman: string) {
    return this.http.get<Apartman>(
      this.apiUrl + `/${idHotel}` + `/${idApartman}`
    );
  }

  deleteApartment(idObjekat: number, idApartman: string) {
    console.log(idObjekat);
    return this.http.delete(this.apiUrl + `/${idObjekat}` + `/${idApartman}`);
  }
  createApartment(idHotel: number, apartman: Apartman) {
    return this.http.post<Apartman>(
      this.apiUrl + `/${idHotel}` + '/apartman',
      apartman
    );
  }
  updateApartment(idHotel: number, idApartman: string, apartman: Apartman) {
    return this.http.put<Apartman>(
      this.apiUrl + `/${idHotel}` + `/${idApartman}`,
      apartman
    );
  }
}

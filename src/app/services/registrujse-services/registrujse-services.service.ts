import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Korisnik } from '../../models/korisnik';

@Injectable({
  providedIn: 'root',
})
export class RegistrujseServicesService {
  private apiUrl = 'http://127.0.0.1:7000/api/v1';
  constructor(private http: HttpClient) {}

  getAllKorisnici() {
    return this.http.get<Korisnik[]>(this.apiUrl + '/korisnici');
  }

  createUser(korisnik: Korisnik) {
    return this.http.post<Korisnik>(this.apiUrl + '/korisnici', korisnik);
  }
  login(korisnik: any) {
    return this.http.post<Korisnik>(this.apiUrl + '/login', korisnik);
  }
}

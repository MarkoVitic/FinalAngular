import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Korisnik } from '../../models/korisnik';
import { Observable } from 'rxjs/internal/Observable';

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
    return this.http.post<any>(this.apiUrl + '/login', korisnik);
  }

  isLogedIn(): boolean {
    const token = localStorage.getItem('data-token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    const token = localStorage.clear();
    return false;
  }
  getUserData() {
    const token = localStorage.getItem('data-token');
    if (!token) return null;

    const tokenParts = token.split('.');
    const userData = tokenParts[1];
    const user = JSON.parse(window.atob(userData));

    return user;
  }
}

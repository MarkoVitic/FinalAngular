import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KontaktForma } from '../../models/kontaktForma';

@Injectable({
  providedIn: 'root',
})
export class KontaktFormaService {
  apiUrl = 'http://127.0.0.1:7000/api/v1/kontakt';
  constructor(private http: HttpClient) {}

  getAllUserQuestion() {
    return this.http.get<KontaktForma[]>(this.apiUrl);
  }
  deleteUserQuestion(id: any) {
    return this.http.delete(this.apiUrl, id);
  }
  createUserQuestion(kontakForma: KontaktForma) {
    return this.http.post<KontaktForma>(this.apiUrl, kontakForma);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotacionService {
  private apiUrl = 'http://localhost:3000/votacion';


  constructor(private http: HttpClient) { }

  enviarVoto(nombre: string, parentesco: string, eleccion: string): Observable<any> {
    const body = { nombre, parentesco, eleccion };
    return this.http.post(`${this.apiUrl}`, body);
  }
}

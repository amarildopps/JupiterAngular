import { Injectable } from '@angular/core';
import { AppConfig } from './../config/config';
import { HttpClient } from '@angular/common/http';
import { Candidato } from '../models/candidato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private pathAPI = this.config.setting['PathAPI'];

  constructor(private http: HttpClient, private config: AppConfig) { }

  addCandidato(candidato: Candidato): Observable<Candidato>{
    return this.http.post<Candidato>(this.pathAPI + "candidatos", candidato);
  } 

  updateCandidato(candidato: Candidato): Observable<Candidato> {
    return this.http.put<Candidato>(this.pathAPI + 'candidatos/'+candidato.id, candidato);
  }

  getCandidatos(idCapa): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(this.pathAPI + 'candidatos');
  }

  getOneCandidato(id): Observable<Candidato> {
    return this.http.get<Candidato>(this.pathAPI + 'candidatos/'+id);
  }
}

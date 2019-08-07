import { Injectable } from '@angular/core';
import { AppConfig } from './../config/config';
import { HttpClient } from '@angular/common/http';
import { Candidatura } from '../models/candidatura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {

  private pathAPI = this.config.setting['PathAPI'];

  constructor(private http: HttpClient, private config: AppConfig) { }

  addCandidatura(candidatura: Candidatura): Observable<Candidatura> {
    return this.http.post<Candidatura>(this.pathAPI + "candidaturas", candidatura);
  }

  updateCandidatura(candidatura: Candidatura): Observable<Candidatura> {
    return this.http.put<Candidatura>(this.pathAPI + 'candidaturas/' + candidatura.id, candidatura);
  }

  getCandidaturas(): Observable<Candidatura[]> {
    return this.http.get<Candidatura[]>(this.pathAPI + 'candidaturas');
  }

  getOneCandidatura(id): Observable<Candidatura> {
    return this.http.get<Candidatura>(this.pathAPI + 'candidaturas/' + id);
  }
  deleteCandidatura(id): Observable<any> {
    return this.http.delete<any>(this.pathAPI + 'candidaturas/' + id);
  }
}

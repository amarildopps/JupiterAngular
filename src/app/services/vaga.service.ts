import { Injectable } from '@angular/core';
import { AppConfig } from './../config/config';
import { HttpClient } from '@angular/common/http';
import { Vaga } from '../models/vaga';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VagaService {

  private pathAPI = this.config.setting['PathAPI'];

  constructor(private http: HttpClient, private config: AppConfig) { }

  addVaga(vaga: Vaga): Observable<Vaga>{
    return this.http.post<Vaga>(this.pathAPI + "vagas", vaga);
  } 

  updateVaga(vaga: Vaga): Observable<Vaga> {
    return this.http.put<Vaga>(this.pathAPI + 'vagas/'+vaga.id, vaga);
  }

  getVagas(): Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.pathAPI + 'vagas');
  }

  getOneVaga(id): Observable<Vaga> {
    return this.http.get<Vaga>(this.pathAPI + 'vagas/'+id);
  }

  deleteVaga(id): Observable<any> {
    return this.http.delete<any>(this.pathAPI + 'vagas/'+id);
  }
}

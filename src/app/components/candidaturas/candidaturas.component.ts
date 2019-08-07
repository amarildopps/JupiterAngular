import { CandidaturaService } from './../../services/candidatura.service';
import { Candidatura } from './../../models/candidatura';
import { CandidatoService } from './../../services/candidato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidaturas',
  templateUrl: './candidaturas.component.html',
  styleUrls: ['./candidaturas.component.css']
})
export class CandidaturasComponent implements OnInit {

  listaCands: Candidatura[] = [];

  constructor(private candidaturaService: CandidaturaService) { }

  ngOnInit() {
    this.carregarCandidaturas();
  }

  carregarCandidaturas(){
    this.candidaturaService.getCandidaturas().subscribe(cad => {
      this.listaCands = cad;
    })
  }

  removerCandidatura(candidatura: Candidatura){
    this.candidaturaService.deleteCandidatura(candidatura.id).subscribe(() => {
      this.carregarCandidaturas();
    })
  }

}

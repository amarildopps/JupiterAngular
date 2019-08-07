import { AppConfig } from './../../config/config';
import { HttpEventType } from '@angular/common/http';
import { UploadService } from './../../services/upload.service';
import { Candidatura } from './../../models/candidatura';
import { Candidato } from './../../models/candidato';
import { CandidaturaService } from './../../services/candidatura.service';
import { CandidatoService } from './../../services/candidato.service';
import { Component, OnInit } from '@angular/core';
import { VagaService } from 'src/app/services/vaga.service';
import { Vaga } from 'src/app/models/vaga';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inscricao-vaga',
  templateUrl: './inscricao-vaga.component.html',
  styleUrls: ['./inscricao-vaga.component.css']
})
export class InscricaoVagaComponent implements OnInit {

  inscrito = false;
  listaVagas: Vaga[] = [];
  vagaSelecionada: Vaga = new Vaga();
  candidato: Candidato = new Candidato();
  candidaturaSalvar: Candidatura = new Candidatura();
  file: any;
  private caminhoUp = this.config.setting['UrlDowload'];

  constructor(private vagasService: VagaService, private candidatoService: CandidatoService,
    private candidaturaService: CandidaturaService, private route: ActivatedRoute,
    private config: AppConfig, private router: Router, private uploadService: UploadService) { }

  ngOnInit() {
    this.carregarVaga();
  }

  carregarVaga() {
    this.route.queryParams.subscribe(params => {
      this.vagasService.getOneVaga(params.idVaga).subscribe(vaga => {
        this.vagaSelecionada = vaga;
      });
    })
  }

  selecionarFicheiro(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  submeterCandidatura() {
    if (this.file != null) {
      this.uploadService.uploadFile(this.file)
        .subscribe(x => {
          if (x.type === HttpEventType.Response) {

            console.log(x.body.caminho)
            this.candidato.ficheiroCurriculo = this.caminhoUp + x.body.caminho;

            this.candidatoService.addCandidato(this.candidato).subscribe(candidato => {
              this.candidaturaSalvar.idVaga = this.vagaSelecionada.id;
              this.candidaturaSalvar.idCandidato = candidato.id;
              this.candidaturaService.addCandidatura(this.candidaturaSalvar).subscribe(candidatura => {
                console.log(JSON.stringify(candidatura));
                this.router.navigateByUrl('/home');
              });
            });
          }
        })
    }
  }

}

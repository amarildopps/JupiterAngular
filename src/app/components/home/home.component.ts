import { Vaga } from './../../models/vaga';
import { Component, OnInit } from '@angular/core';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaVagas: Vaga[] = [];

  constructor(private vagasService: VagaService) { }

  ngOnInit() {
    this.carregarVagas();
  }

  carregarVagas(){
    this.vagasService.getVagas().subscribe(vagas => {
      this.listaVagas = vagas;
    })
  }


}

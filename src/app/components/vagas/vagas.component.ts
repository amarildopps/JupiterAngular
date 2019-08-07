import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  listaVagas: Vaga[] = [];
  vagaSalvar: Vaga = new Vaga();

  constructor(private vagasService: VagaService) { }

  ngOnInit() {
    this.carregarVagas();
  }

  carregarVagas() {
    this.vagasService.getVagas().subscribe(vagas => {
      this.listaVagas = vagas;
    })
  }

  removerVaga(id) {
    this.vagasService.deleteVaga(id).subscribe(() => {
      this.carregarVagas();
    })
  }

  salvarVaga() {
    if (this.vagaSalvar.id == null && this.vagaSalvar.id != 0) {
      this.vagasService.addVaga(this.vagaSalvar).subscribe(vaga => {
        this.carregarVagas();
        this.vagaSalvar = new Vaga();
      })
    } else {
      this.vagasService.updateVaga(this.vagaSalvar).subscribe(vaga => {
        this.carregarVagas();
        this.vagaSalvar = new Vaga();
      })
    }
  }

  verVaga(vaga) {
    this.vagaSalvar = vaga;
  }

}

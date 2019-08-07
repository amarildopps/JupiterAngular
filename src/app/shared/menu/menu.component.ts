import { Candidato } from './../../models/candidato';
import { CandidatoService } from './../../services/candidato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  display: boolean = false;
  candidatoSalvar = new Candidato()

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit() {
  }


  showDialog() {
      this.display = true;
  }

  salvarCandidado(){

  }

}

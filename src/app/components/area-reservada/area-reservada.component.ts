import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-reservada',
  templateUrl: './area-reservada.component.html',
  styleUrls: ['./area-reservada.component.css']
})
export class AreaReservadaComponent implements OnInit {

  verVagas = true;
  verCandidaturas = false;

  constructor() { }

  ngOnInit() {
  }

  showMenu(idMenu){
    switch(idMenu){
      case 1: this.verVagas = true; this.verCandidaturas = false; break;
      case 2: this.verCandidaturas = true; this.verVagas = false; break;
      case 3: this.verCandidaturas = true; this.verVagas = false; break;
    }
  }

}

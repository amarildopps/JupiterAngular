import { VagaService } from './services/vaga.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shared/app.component';
import { CandidatoService } from './services/candidato.service';
import { CandidaturaService } from './services/candidatura.service';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import {DialogModule} from 'primeng/dialog';
import { InscricaoVagaComponent } from './components/inscricao-vaga/inscricao-vaga.component';
import { AreaReservadaComponent } from './components/area-reservada/area-reservada.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { CandidaturasComponent } from './components/candidaturas/candidaturas.component';
import { CandidatosComponent } from './components/candidatos/candidatos.component';
import { UploadService } from './services/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    InscricaoVagaComponent,
    AreaReservadaComponent,
    VagasComponent,
    CandidaturasComponent,
    CandidatosComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [
    VagaService,
    CandidatoService,
    CandidaturaService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

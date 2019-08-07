import { AreaReservadaComponent } from './components/area-reservada/area-reservada.component';
import { InscricaoVagaComponent } from './components/inscricao-vaga/inscricao-vaga.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'inscricao', component: InscricaoVagaComponent},
  { path: 'areareservada', component: AreaReservadaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

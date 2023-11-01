import { DetalhesComponentPoderes } from './components/poderes/detalhesPoderes/detalhesPoderes.component';
import { DetalhesComponent } from './components/herois/detalhes/detalhes.component';
import { HeroiCreateComponent } from './components/herois/heroi-create/heroi-create.component';
import { HeroiUpdateComponent } from './components/herois/heroi-update/heroi-update.component';
import { HeroisComponent } from './components/herois/herois.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PoderesComponent } from './components/poderes/poderes.component';
import { PoderesUpdateComponent } from './components/poderes/poderes-update/poderes-update.component';
import { PoderesCreateComponent } from './components/poderes/poderes-create/poderes-create.component';

const routes: Routes = [
  {path: "", 
  component: HomeComponent},
  {path: 'herois',
  component: HeroisComponent},
  {path: 'create',
  component: HeroiCreateComponent},
  {path: 'detalhes/:id',
  component: DetalhesComponent},
  {path: 'herois/update/:id',
  component: HeroiUpdateComponent},
  {path: 'poderes',
  component: PoderesComponent},
  {path: 'detalhes/poderes/:id',
  component: DetalhesComponentPoderes},
  {path: 'poderes/update/:id',
  component: PoderesUpdateComponent},
  {path: 'poderes/create',
  component: PoderesCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { DetalhesComponentPoderes } from './components/poderes/detalhesPoderes/detalhesPoderes.component';
import { HomeComponent } from './components/home/home.component';
import { DetalhesComponent } from './components/herois/detalhes/detalhes.component';
import { HeroiCreateComponent } from './components/herois/heroi-create/heroi-create.component';
import { HeroisComponent } from './components/herois/herois.component';
import { SidenavComponent } from './components/sidenav/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroiUpdateComponent } from './components/herois/heroi-update/heroi-update.component';
import { PoderesComponent } from './components/poderes/poderes.component';
import { PoderesUpdateComponent } from './components/poderes/poderes-update/poderes-update.component';
import { PoderesCreateComponent } from './components/poderes/poderes-create/poderes-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HeroisComponent,
    HeroiCreateComponent,
    DetalhesComponent,
    HeroiUpdateComponent,
    HomeComponent,
    PoderesComponent,
    PoderesUpdateComponent,
    DetalhesComponentPoderes,
    PoderesCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

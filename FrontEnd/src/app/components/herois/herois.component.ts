import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import mdlHerois from 'src/models/mdlHerois';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent {
  
  herois: mdlHerois[] = []
  id: string = "";
  resposta?: boolean | null = null
  
  constructor(private ApiService: ApiService, private router: Router) {

  }

  ngOnInit(){
      this.ApiService.getHerois().subscribe(herois => {
        this.herois = herois
      })
  }

  navegarCriarHeroi(): void {
    this.router.navigate(['/create'])
  }

  pesquisar(): void {

    var heroi = this.herois.filter(i => i.id == parseInt(this.id))
    this.herois = heroi;

    if(heroi == null || heroi.length == 0) {
      this.resposta = false
    }else{
      this.resposta = true
    }
  }

  atualizarPagina(): void {
    this.ApiService.getHerois().subscribe(herois => {
      this.resposta = null
      this.herois = herois
    })
  }

}

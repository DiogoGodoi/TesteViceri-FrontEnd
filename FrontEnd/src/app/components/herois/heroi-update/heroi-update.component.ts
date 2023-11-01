import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import mdlHerois from 'src/models/mdlHerois';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroi-update',
  templateUrl: './heroi-update.component.html',
  styleUrls: ['./heroi-update.component.css']
})
export class HeroiUpdateComponent {
  herois: mdlHerois = {
    id: 0,
    dataNascimento: new Date(),
    nome: "",
    nomeHeroi: "",
    altura: 0,
    peso: 0,
  };

  resposta?: boolean

  constructor(private ApiService: ApiService, private Router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id')
    this.ApiService.getIdHerois(id).subscribe(herois => {
      this.herois = herois
    })
  }

  update(): void {
    this.ApiService.putHerois(this.herois).subscribe(()=>{
      this.resposta = true;
      setTimeout(()=>{
        this.Router.navigate(['/herois'])
      }, 2000)
    }, (erro) => {
      this.resposta = false;
      setTimeout(()=>{
        this.Router.navigate(['/herois'])
      }, 2000)
    })
  }

  Voltar(): void {
    this.Router.navigate(['/herois'])
  }

}

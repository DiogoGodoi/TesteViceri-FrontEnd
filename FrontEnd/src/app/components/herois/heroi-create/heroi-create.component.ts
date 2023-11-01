import mdlHerois from 'src/models/mdlHerois';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-heroi-create',
  templateUrl: './heroi-create.component.html',
  styleUrls: ['./heroi-create.component.css']
})
export class HeroiCreateComponent {

    herois: mdlHerois = {
      id: 0,
      dataNascimento: new Date(),
      nome: "",
      nomeHeroi: "",
      altura: 0,
      peso: 0,
    };

    resposta?: boolean

    constructor(private ApiService: ApiService, private router: Router) {

    }

    criar(): void {
      this.ApiService.postHerois(this.herois).subscribe(() => {
        this.resposta = true;
        setTimeout(()=>{
          this.router.navigate(['/herois'])
        }, 2000)
      }, (erro)=> {
        this.resposta = false;
        setTimeout(()=>{
          this.router.navigate(['/herois'])
        }, 2000)
      })
    }

    Voltar(): void {
      this.router.navigate(['/herois'])
    }
}

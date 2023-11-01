import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import mdlPoderes from 'src/models/mdlPoderes';

@Component({
  selector: 'app-poderes-create',
  templateUrl: './poderes-create.component.html',
  styleUrls: ['./poderes-create.component.css']
})
export class PoderesCreateComponent {
  poderes: mdlPoderes = {
    id: 0,
    superPoder: "",
    descricao: "",
  };

  resposta?: boolean

  constructor(private ApiService: ApiService, private router: Router) {

  }

  criar(): void {
    this.ApiService.postPoderes(this.poderes).subscribe(() => {
      this.resposta = true
      setTimeout(()=>{
        this.router.navigate(['/poderes'])
      },2000)
    }, (erro)=>{
      this.resposta = false
      setTimeout(()=>{
        this.router.navigate(['/poderes'])
      },2000)
    })
  }

  Voltar(): void {
    this.router.navigate(['/poderes'])
  }
}

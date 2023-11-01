import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import mdlPoderes from 'src/models/mdlPoderes';

@Component({
  selector: 'app-poderes',
  templateUrl: './poderes.component.html',
  styleUrls: ['./poderes.component.css']
})
export class PoderesComponent {
  
  poderes: mdlPoderes[] = []
  resposta?: boolean | null = null;
  id: string = "";
  
  constructor(private ApiService: ApiService, private router: Router) {

  }

  ngOnInit(){
      this.ApiService.getPoderes().subscribe(poderes => {
        this.poderes = poderes
      })
  }

  navegarCriarPoder(): void {
    this.router.navigate(['/poderes/create'])
  }

  pesquisar(): void {

    var poderes = this.poderes.filter(i => i.id == parseInt(this.id))
    this.poderes = poderes;

    if(poderes == null || poderes.length == 0) {
      this.resposta = false
    }else{
      this.resposta = true
    }
  }

  atualizarPagina(): void {
    this.ApiService.getPoderes().subscribe(poderes => {
      this.resposta = null
      this.poderes = poderes
    })
  }
}
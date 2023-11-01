import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import mdlPoderes from 'src/models/mdlPoderes';

@Component({
  selector: 'app-detalhes-poderes',
  templateUrl: './detalhesPoderes.component.html',
  styleUrls: ['./detalhesPoderes.component.css']
})
export class DetalhesComponentPoderes {

  poderes?: mdlPoderes;
  resposta?: boolean
  constructor(private ApiService: ApiService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    this.ApiService.getIdPoderes(id).subscribe(poderes => {
      this.poderes = poderes
    })

  }

  remover(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ApiService.deletePoderes(id).subscribe(() => {
      this.resposta = true
      setTimeout(()=>{
        this.router.navigate(['/poderes'])
      }, 2000)
    }, (erro) =>{
      this.resposta = false
      setTimeout(()=>{
        this.router.navigate(['/poderes'])
      }, 2000)
    })
  }

  navegarUpdate(): void {
    this.router.navigate(['/poderes/update'])
  }

  Voltar(): void {
    this.router.navigate(['/poderes'])
  }
}

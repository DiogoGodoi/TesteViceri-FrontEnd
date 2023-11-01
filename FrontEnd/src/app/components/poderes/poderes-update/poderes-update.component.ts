import { mdlPoderes } from './../../../../models/mdlPoderes';
import { ApiService } from 'src/app/services/api.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poderes-update',
  templateUrl: './poderes-update.component.html',
  styleUrls: ['./poderes-update.component.css']
})
export class PoderesUpdateComponent {
  poderes: mdlPoderes = {
    id: 0,
    descricao: "",
    superPoder: "",
  };

  resposta?: boolean

  constructor(private ApiService: ApiService, private Router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id')
    this.ApiService.getIdPoderes(id).subscribe(poderes => {
      this.poderes = poderes
    })
  }

  update(): void {
    this.ApiService.putPoderes(this.poderes).subscribe(()=>{
      this.resposta = true
      setTimeout(()=>{
        this.Router.navigate(['/poderes'])
      },2000)
    }, (erro)=>{
      this.resposta = false
      setTimeout(()=>{
        this.Router.navigate(['/poderes'])
      },2000)
    })
  }

  Voltar(): void {
    this.Router.navigate(['/poderes'])
  }

}

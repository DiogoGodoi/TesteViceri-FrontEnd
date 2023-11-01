import { ApiService } from './../../../services/api.service';
import mdlHerois from 'src/models/mdlHerois';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import mdlHeroisPoderes from 'src/models/mdlHeroisPoderes';
import mdlPoderes from 'src/models/mdlPoderes';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent {
  
  herois?: mdlHerois;
  resposta?: boolean;
  mensagem?: string;
  valor: any
  valorHeroi: number = 9
  heroisPoderes?: mdlHeroisPoderes[]= []
  poderes: mdlPoderes[] = []
  
  constructor(private ApiService: ApiService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    this.ApiService.getIdHerois(id).subscribe(heroi => {
      this.herois = heroi
    })

    this.ApiService.getPoderesHerois(id).subscribe(heroisPoderes=>{
      this.heroisPoderes = heroisPoderes.filter(i => i.heroiId)
    })

    this.ApiService.getPoderes().subscribe(poderes=>{
      this.poderes = poderes
    })
  }

  remover(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ApiService.deleteHerois(id).subscribe(() => {
      this.mensagem = "Removido com sucesso"
      this.resposta = true
      setTimeout(()=>{
        this.router.navigate(['/herois'])
      },2000)
    }, (erro) => {
      this.resposta = false;
      setTimeout(()=>{
        this.router.navigate(['/herois'])
      },2000)
    })
  }

  navegarUpdate(): void {
    this.router.navigate(['/herois/update'])
  }

  Voltar(): void {
    this.router.navigate(['/herois'])
  }

  adcionarPoder(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const idNum = Number(id)
    this.ApiService.postPoderesHerois(idNum, this.valor).subscribe(()=>{

    }, (erro) => {
      if (erro.status == 200) {
        this.resposta = true;
        this.mensagem = "Adcionado com sucesso";
        setTimeout(() => {
          this.router.navigate(['/herois']);
        }, 2000);
      }else{
        this.resposta = false;
        this.mensagem = "Poder já adicionado";
        setTimeout(() => {
          this.router.navigate(['/herois']);
        }, 2000);
      }
    })
  }
}

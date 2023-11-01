import { mdlHeroisPoderes } from './../../models/mdlHeroisPoderes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import mdlHerois from 'src/models/mdlHerois';
import mdlPoderes from 'src/models/mdlPoderes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlHeroisGet = "http://localhost:5017/api/APIHerois"
  urlHeroisPost = "http://localhost:5017/api/APIHerois/api/APIHerois/create"
  urlHeroisGetID = "http://localhost:5017/api/APIHerois/api/APIHerois/heroi"
  urlHeroisDelete = "http://localhost:5017/api/APIHerois/api/APIHerois/delete"
  urlHeroisPut = "http://localhost:5017/api/APIHerois/api/APIHerois/update"

  urlPoderesGet = "http://localhost:5017/api/ApiSuperPoderes/api/ApiSuperPoderes"
  urlPoderesGetID = "http://localhost:5017/api/ApiSuperPoderes/api/ApiSuperPoderes/poderes"
  urlPoderesDelete = "http://localhost:5017/api/ApiSuperPoderes/api/ApiSuperPoderes/delete"
  urlPoderesPut = "http://localhost:5017/api/ApiSuperPoderes/api/ApiSuperPoderes/update"
  urlPoderesPost = "http://localhost:5017/api/ApiSuperPoderes/api/ApiSuperPoderes/create"

  urlHeroisPoderesGet = "http://localhost:5017/api/APIHeroisPoderes/api/APIHeroisPoderes"
  urlHeroisPoderesPost = "http://localhost:5017/api/APIHeroisPoderes/api/APIHeroisPoderes/create"

  constructor(private http: HttpClient) { }

  getHerois(): Observable<mdlHerois[]> {
    return this.http.get<mdlHerois[]>(this.urlHeroisGet);
  }

  postHerois(herois: mdlHerois | undefined): Observable<mdlHerois>{
    return this.http.post<mdlHerois>(this.urlHeroisPost, herois)
  }

  putHerois(herois: mdlHerois): Observable<mdlHerois> {
    return this.http.put<mdlHerois>(`${this.urlHeroisPut}/${herois.id}`, herois);
  }
  
  getIdHerois(id: any): Observable<mdlHerois>{
    return this.http.get<mdlHerois>(`${this.urlHeroisGetID}/${id}`)
  }

  deleteHerois(id: any): Observable<mdlHerois>{
    return this.http.delete<mdlHerois>(`${this.urlHeroisDelete}/${id}`)
  }

  getPoderes(): Observable<mdlPoderes[]>{
    return this.http.get<mdlPoderes[]>(this.urlPoderesGet);
  }

  getIdPoderes(id: any): Observable<mdlPoderes>{
    return this.http.get<mdlPoderes>(`${this.urlPoderesGetID}/${id}`);
  }

  deletePoderes(id: any): Observable<mdlPoderes>{
    return this.http.delete<mdlPoderes>(`${this.urlPoderesDelete}/${id}`)
  }

  putPoderes(poderes: mdlPoderes): Observable<mdlPoderes> {
    return this.http.put<mdlPoderes>(`${this.urlPoderesPut}/${poderes.id}`, poderes);
  }

  postPoderes(poderes: mdlPoderes | undefined): Observable<mdlPoderes>{
    return this.http.post<mdlPoderes>(this.urlPoderesPost, poderes)
  }

  getPoderesHerois(id: any): Observable<mdlHeroisPoderes[]>{
    return this.http.get<mdlHeroisPoderes[]>(`${this.urlHeroisPoderesGet}/${id}`)
  }

  postPoderesHerois(heroId: number, superPoderId: number): Observable<mdlHeroisPoderes>{
    var poderesHeroi: mdlHeroisPoderes = {
      heroiId: heroId,
      superPoderId: superPoderId
    }
    return this.http.post<mdlHeroisPoderes>(this.urlHeroisPoderesPost, poderesHeroi)
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  path:string = environment.dogAPI;

  constructor( public http: HttpClient ) { }

  getBreeds(){
    let url: string = `${this.path}breeds/list/all`;
    return this.http.get(url);
  }

  getImage(nameBreed: string){
    let url: string = `${this.path}breed/${nameBreed}/images/random`;
    return this.http.get(url);
    console.log(url)
  }

}

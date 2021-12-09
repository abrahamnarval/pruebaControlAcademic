import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { ListBreedsInterface } from 'src/app/models/listBreeds/listBreeds.interface';

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor( public httpService: HttpService ) { 
    this.httpService.getBreeds();
  }

  // getListBreeds(){

  // }

}

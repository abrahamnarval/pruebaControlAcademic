import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { ListBreedsInterface } from 'src/app/models/listBreeds/listBreeds.interface';
import  { ImageInterface } from 'src/app/models/image/image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  breeds!: ListBreedsInterface[];
  images!: any;

  constructor( public httpService: HttpService ) {  }

  ngOnInit(): void {
    this.getListBreed();
  }

  

  getListBreed(){
    this.httpService.getBreeds().subscribe( async (data: any) => {

      let raza = [];
      for ( let key in data.message ) {
        const image = await this.getImageBreed(key)
        raza.push({
          image ,
          name: key,
          qty: 0
        })
      }

      this.breeds = raza;
    })
  }

  getImageBreed(nameBreed: string):Promise<string>{
    return new Promise(resolve => {
      this.httpService.getImage(nameBreed).subscribe( (data: any) => {
        this.images = data.message;
        resolve(data.message)
      })
    })
  }
  
}

import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // @Input() idBreed!: string;
  @Input () imageBreed!: any;
  @Input () nameBreed!: any;
  @Input () quantityBreed!: any;
  @Input () optionBreed!: any;

  cont!: number;

  page: number = 1;
  pageSize: number = 5;
  breeds!: any;
  collectionBreeds!: number;

  constructor( public httpService: HttpService, public homeComponent: HomeComponent) {
    this.collectionBreeds = httpService.getBreeds.length;
    this.refreshBreeds();
    this.breeds = homeComponent.getListBreed();
    this.cont = this.cont + 1;

    console.log(this.breeds)
  }

  refreshBreeds() {
    // this.breeds = this.httpService.getBreeds();
    ((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
  }

}

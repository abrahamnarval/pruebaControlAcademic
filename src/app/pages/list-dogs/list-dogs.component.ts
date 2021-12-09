import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dogs',
  templateUrl: './list-dogs.component.html',
  styleUrls: ['./list-dogs.component.css']
})
export class ListDogsComponent implements OnInit {

  page = 1;
  pageSize = 5;

  constructor() {
    this.refreshCountries();
  }

  refreshCountries() {
    ((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
  }

}

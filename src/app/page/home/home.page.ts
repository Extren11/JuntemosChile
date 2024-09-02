import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/api/home/home.service';
import { Reporte } from 'src/app/models/reporte';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  reportes: Reporte[] = [];

  constructor(private _reportes: HomeService) {}

  ngOnInit(){
    this.reportes = this._reportes.obtener_lista_reportes();
  }

}

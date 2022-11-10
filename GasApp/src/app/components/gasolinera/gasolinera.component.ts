import { Component, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/interfaces/gasolinera';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {

  listaGasolineras: Gasolinera[] = [];

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
  }

  getGasolinera(){
    this.gasolineraService.getGasolineras().subscribe(resp => {
      this.listaGasolineras = resp.ListaEESSPrecio;
    })
  }

}

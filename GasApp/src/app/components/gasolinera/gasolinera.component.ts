import { Component, OnInit } from '@angular/core';
import { ListaEESSPrecio } from 'src/app/interfaces/gasolinera';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {

  listaGasolineras: ListaEESSPrecio[] = [];

  constructor(private gasolineraService: GasolineraService) { }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      this.listaGasolineras = resp.ListaEESSPrecio;
      debugger;
    })
  }
}

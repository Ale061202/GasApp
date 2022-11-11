import { Component, OnInit } from '@angular/core';
import { ListaEESSPrecio, ProvinciaResponse } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit {

  listaGasolineras: ListaEESSPrecio[] = [];
  listaGasolinerasFiltered: ListaEESSPrecio[] = [];
  listaProvincias: ProvinciaResponse[] = [];
  provinciasLista: string[] = [];

  constructor(private gasolineraService: GasolineraService) { }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  ngOnInit(): void {
    this.getGasolinera();
  }

  getGasolinera(){
    this.gasolineraService.getGasolineras().subscribe(resp => {
      this.listaGasolineras = resp.ListaEESSPrecio;
    })
  }

  filterProvincia(){
    this.listaGasolineras = this.listaGasolinerasFiltered;
    if(this.listaGasolineras.length > 0){
      let listaProvincias: ListaEESSPrecio[] = this.listaGasolineras.filter(lista => this.provinciasLista.includes(lista.IDProvincia))
      this.listaGasolineras = listaProvincias
    }else{
      this.getGasolinera();
    }
  }

  quitarFiltro(){
    this.listaGasolineras = this.listaGasolinerasFiltered;
  }
}

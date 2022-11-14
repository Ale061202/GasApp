import { Component, OnInit } from '@angular/core';
import { ListaEESSPrecio } from 'src/app/interfaces/gasolinera.interface';
import { ProvinciaResponse } from 'src/app/interfaces/provincia.interface';
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
  carburanteList = ['Gasolina','Hidrogeno','Gasoleo'];
  carburanteSelected = '';
  provinciaSelected: String[] = [];
  min = 1;
  max = 5;
  valor = 1;

  constructor(private gasolineraService: GasolineraService) {}

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(resp => {
      this.listaGasolineras = resp.ListaEESSPrecio;
      this.listaGasolinerasFiltered = resp.ListaEESSPrecio;
    });
     
    this.gasolineraService.getProvincia().subscribe(resp => {
      this.listaProvincias = resp;
    });
  }

  filtros(){
    this.listaGasolinerasFiltered = this.listaGasolineras.filter(precioF => this.carburante(precioF));
  }

  carburante(precio: ListaEESSPrecio){
    let precioFiltro = false;
    if(this.carburanteSelected == 'Gasolina'){
      precioFiltro = + precio['Precio Gasolina 95 E5'].replace(",",".") < this.max ? true : false;
    }else if(this.carburanteSelected == 'Hidrogeno'){
      precioFiltro = + precio['Precio Hidrogeno'].replace(",",".") < this.max ? true : false;
    }else{
      precioFiltro = + precio['Precio Gasoleo A'].replace(",",".") < this.max ? true : false;
    }
    return precioFiltro;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraResponse, ProvinciaResponse } from '../interfaces/gasolinera.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) {}

  getGasolineras(): Observable<GasolineraResponse>{
    return this.http.get<GasolineraResponse>(`https://raw.githubusercontent.com/Ale061202/GasApp/main/GasApp/raw-data/response.json`);
  }

  getProvincia(): Observable<ProvinciaResponse>{
    return this.http.get<ProvinciaResponse>(`https://raw.githubusercontent.com/Ale061202/GasApp/main/GasApp/raw-data/provincia.json`);
  }
}

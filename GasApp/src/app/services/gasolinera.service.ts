import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraResponse } from '../interfaces/gasolinera';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) {}

  getGasolineras(): Observable<GasolineraResponse>{
    return this.http.get<GasolineraResponse>(`https://raw.githubusercontent.com/SirMowglo/gasApp/main/gasResponse.json`);
  }
}

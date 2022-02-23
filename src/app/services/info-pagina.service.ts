import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPagina } from '../interfaces/data-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: DataPagina= {};
  cargada = false;


  constructor( private http: HttpClient ) {
    
    //Leer Archivo JSON
    this.http.get<DataPagina>('assets/data/data-pagina.json')
        .subscribe( (resp: DataPagina) =>{
          this.cargada= true;
          this.info = resp;
          console.log(this.info)
        });
  }


  
}

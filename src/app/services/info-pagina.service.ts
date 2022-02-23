import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataPagina, DataEquipo } from '../interfaces/data-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: DataPagina= {};
  infoCargada = false;

  equipo: DataEquipo[] = [];
  equipoCargada = false;

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }
  
  
  private cargarInfo(){
    //Leer Archivo JSON
    this.http.get<DataPagina>('assets/data/data-pagina.json')
        .subscribe( (resp: DataPagina) =>{
          this.infoCargada= true;
          this.info = resp;
        });
  }
  private cargarEquipo(){
    this.http.get<DataEquipo[]>('https://angular-portafolio-16d59-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp: DataEquipo[]) =>{
        this.equipo = resp;
        this.equipoCargada = true;
      });
  }

  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoIdx } from '../interfaces/data-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  productos_id: ProductoIdx[]=[]
  cargando = true

  private cargarProductos(){
    this.http.get<ProductoIdx[]>('https://angular-portafolio-16d59-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe(resp =>{
          this.cargando = false
          this.productos_id = resp
          console.log (resp);
        })
  }
}

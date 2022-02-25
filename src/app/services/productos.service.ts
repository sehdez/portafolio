import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoIdx, Producto } from '../interfaces/data-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

  productos_id: ProductoIdx[]=[];
  cargando = true;
  productosFiltrado: ProductoIdx[]= [];


  private cargarProductos(){

    return new Promise ( ( resolve, reject ) =>{

      this.http.get<ProductoIdx[]>('https://angular-portafolio-16d59-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe(resp =>{
            this.cargando = false
            this.productos_id = resp;
            resolve(true);
          });
    } )


  }

  getProducto(id:string){
    return this.http.get(`https://angular-portafolio-16d59-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }
  buscarProducto(id:string){
    if (this.productos_id.length ==0){
      this.cargarProductos().then( () =>{
        this.filtarProductos(id);

      })
    }else{
      this.filtarProductos(id);
    }
    
  }
  private filtarProductos (termino:string){
    this.productosFiltrado=[];
    termino = termino.toLowerCase();
    
    this.productos_id.forEach( prod =>{
      const tituloLower = prod.titulo?.toLowerCase();
      if( prod.categoria?.indexOf(termino)! >= 0 || tituloLower!.indexOf(termino) >=0 ){
        this.productosFiltrado.push( prod );
      }
    } );
  }




}

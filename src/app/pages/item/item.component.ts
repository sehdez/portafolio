import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/data-pagina.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {
  
  producto: Producto = {};
  id : String = "";

  constructor( private route: ActivatedRoute,
                public _producto: ProductosService ) { }


  ngOnInit(): void {
    this.route.params
        .subscribe( (parametros) =>{
          this._producto.getProducto(parametros['id'])
            .subscribe( (producto: Producto) => {
              this.id = parametros['id'];
              this.producto = producto;
            });
        });
  }

}

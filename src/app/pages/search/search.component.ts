import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor( private route:ActivatedRoute,
                public _productos: ProductosService) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(termino =>{
          console.log(termino['termino']);
          this._productos.buscarProducto(termino['termino'])
        });
  }

}

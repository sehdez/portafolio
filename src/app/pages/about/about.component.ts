import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor( public _servicios: InfoPaginaService) { }


  ngOnInit(): void {
  }

}

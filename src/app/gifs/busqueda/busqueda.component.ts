import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent{
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(private gifsService:GifsService){}
  buscar(){
    // console.log(this.txtBuscar);
    // console.log(this.txtBuscar.nativeElement.value);

    const valor = this.txtBuscar.nativeElement.value;
    
    if (valor.trim().length>0) {
      console.log(this.gifsService.historial.indexOf(valor));
      
      
      this.gifsService.buscarGifs(valor);
      this.txtBuscar.nativeElement.value = '';  
    }else{
      return;
    }
  }
}

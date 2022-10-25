import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class GifsService {
  constructor() { }
  private _historial:string[]=[];
  get historial(){
    return [...this._historial];
  }
  buscarGifs(query:string){
    // if (this._historial.indexOf(query)!=-1) {
    //   return;
    // }
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      console.log(this._historial);  
    }
  }
}

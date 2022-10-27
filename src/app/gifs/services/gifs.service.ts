import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class GifsService {
  private apiKey : string ='UBCFCVKfcAPBYaBhZUpkdU2aBJeUun9Z';

  private _historial:string[]=[];
  public resultados:any[]=[];

  get historial(){
    return [...this._historial];
  }
  // get resultados(){
  //   return [...this._resultados];
  // }
  constructor(private http:HttpClient){};
  buscarGifs(query:string){
    // if (this._historial.indexOf(query)!=-1) {
    //   return;
    // }
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      console.log(this._historial);  
    }
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    .subscribe((resp:any) =>{
      console.log(resp.data);
      this.resultados = resp.data;
    });
  }
}

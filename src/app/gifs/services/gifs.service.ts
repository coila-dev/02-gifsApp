import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({ providedIn: 'root'})
export class GifsService {
  private apiKey : string ='UBCFCVKfcAPBYaBhZUpkdU2aBJeUun9Z';
  private servicioURL : string='https://api.giphy.com/v1/gifs';
  private _historial:string[]=[];
  public resultados:Gif[]=[];
  

  get historial(){
    return [...this._historial];
  }
  // get resultados(){
  //   return [...this._resultados];
  // }
  constructor(private http:HttpClient){
    this._historial=JSON.parse(localStorage.getItem('historial')!)||[];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!)||[];
  };
  buscarGifs(query:string){
    // if (this._historial.indexOf(query)!=-1) {
    //   return;
    // }
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      console.log(this._historial);  
      // localStorage.setItem('historial',query);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    
    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('q',query);
      console.log(params);
      
    // this.http.get<SearchGifsResponse>(`${this.servicioURL}/search?api_key=${this.apiKey}&q=${query}&limit=10`)
    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`, {params})
    .subscribe((resp) =>{
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    });
    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Personagem } from "../models/personagem";
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  private personagensUrl: string = 'https://gateway.marvel.com:443/v1/public/characters?';
  private publicKey: string = 'dadf708548c33c0f35097c1274a3775e';
  private privateKey: string = '88fd93f2455f0ef672734efb5f9b6efed8349fee';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  }

  getPersonagens(nome: string = ''): Observable<{data: {results: Personagem[]}}> {
    let url = this.personagensUrl;
    if(nome.length > 0) {
      url += 'nameStartsWith='+encodeURI(nome)+'&';
    }
    return this.http.get<{data: {results: Personagem[]}}>(url + this.getParams())
      .pipe(
        catchError(error => {
          console.log(error);

          return [];
        })
      );
  }

  getParams(): string {
    let ts = new Date().getTime();
    let hash = Md5.hashStr(ts + this.privateKey + this.publicKey);
    let params = 'ts=' + ts + '&apikey=' + this.publicKey + '&hash=' + hash;

    return params;
  }

}

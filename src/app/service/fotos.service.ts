import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FotosService {

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
    }
    // Se establece la base url del API a consumir
    apiURL = 'https://jsonplaceholder.typicode.com';
    // Se declara la variable http de tipo HttpClient
    constructor(private http:HttpClient) { }

    //Obtiene todos los datos de la api
    obtenerPosts(): Observable<any>{
    return this.http.get(this.apiURL+'/posts/').pipe(retry(3))
    }
    //Obtiene parametros filtrado de la api, se debe pasar el id o similar
    obtenerPostsFiltrado(id): Observable<any>{
    return this.http.get(this.apiURL+'/posts/'+id).pipe(retry(3))
    }
  }

 
   
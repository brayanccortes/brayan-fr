import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
/*Falta una importación*/

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private API_URL!: string;
  constructor(private httpClient: HttpClient) {
      this.API_URL = environment.api.baseUrl + environment.api.persona.persona;
  }

  getAllPeople() :Observable<any>{
    return this.httpClient.get<any>(this.API_URL);
  }
}
/* Hace falta unos metodos
*/

import { Injectable } from '@angular/core';
import { Rekan } from '../model/rekan';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RekanService {
  private rekanUrl: string = 'http://localhost:3005/rekanan';

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }

  getRekanan(): Observable<Rekan[]>{
    return this.http.get<Rekan[]>(this.rekanUrl);
  }

  getRekan(id: number): Observable<Rekan>{
    //--> http://localhost:3005/heroes/5
    const urlByID = `${this.rekanUrl}/${id}`
    return this.http.get<Rekan>(urlByID) // 
  }

  /**
   * Add hero service
   */
  addRekanService(rekan: Rekan): Observable<Rekan>{
    return this.http.post<Rekan>(this.rekanUrl, rekan, this.httpOptions)
  }
}

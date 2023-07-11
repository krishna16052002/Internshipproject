import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreaterideService {

  constructor(private http: HttpClient , private router:Router) { }

  getuser(): Observable<any>{
    return this.http.get("http://localhost:8080/user");
  }


  getServiceType(cityId: any) {
    // console.log(cityId)
    return this.http.get<any>(`http://localhost:8080/vehiclepricing/${cityId}`);
  }


  addcreateride(createridedata:any ):Observable<any>{
    return this.http.post(`http://localhost:8080/createride` , createridedata);
  }

  getridedata():Observable<any>{
    return this.http.get('http://localhost:8080/createride');
  }

  deleteride(_id: any): Observable<any> {
    return this.http.delete(`http://localhost:8080/createride/`+ _id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http :HttpClient) { }

 addsetting(setting:any){
  return this.http.post<any>("http://localhost:8080/setting", setting)
 }

 getsetting(){
   return this.http.get<any>("http://localhost:8080/setting")
 }
 updatesetting(_id: any  , setting : any ): Observable<any> {
  return this.http.patch(`http://localhost:8080/setting/`+_id , setting)}

}

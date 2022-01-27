import { Injectable } from '@angular/core';
import { listUser } from '../../models/listUser.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://my-user-manager.herokuapp.com/users";

  constructor(private Http:HttpClient) { }

  getUsers():Observable<listUser[]>{
    return this.Http.get<listUser[]>(this.url);
  }

}

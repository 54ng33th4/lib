import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
server_address: string='api';
  constructor(private http: HttpClient) { }
  newBook( item:any){
    return this.http.post(`${this.server_address}/insert`,{"book":item})
    .subscribe(data=>{console.log(data)})
  }
  getBooks(){
    return this.http.get(`${this.server_address}/books`)
  }
}

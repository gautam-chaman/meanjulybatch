import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( public http:HttpClient, public routs:ActivatedRoute) { }

  url="http://localhost:5000/";



// get api service

  getmydata(){
    return this.http.get(this.url+"getdata");

  }


//post api service


  insertdata(data:any):Observable<any>{

    return this.http.post(this.url+"insertdata",data)
  }

  viewdata(id:any):Observable<any>{
    let ids=id;
    return this.http.get(this.url+"view/:id"+`${ids}`)

  }

}

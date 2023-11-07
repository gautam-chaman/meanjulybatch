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


  // Delete my data  Service

  mydelete(id:any){

    let ids=id;
    return this.http.delete(this.url+"deleterecord/"+`${ids}`)
  }



  // update data by id

  // myupdatedata(data:any,id:any):Observable<any>

  //   let ids=id;
  //   return this.http.post(`${this.url}update/ ${ids}`,data)
  // }


  updatedata(data:any, id:any):Observable<any>{
    let ids=id;
    return this.http.post(`${this.url}update/${ids}`,data)


  }

  // update service is end here

  // single user is start here 
  
  

singleuser(id:any){
  let ids=id;

  return this.http.get(`${this.url+"singledata"}/${ids}`)
  


}

// single service is end here

// login service start here

loginuser(data:any):Observable<any>{
  return this.http.post(`${this.url}login`,data)

}




}

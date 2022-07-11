import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Flightmodel } from './flightmodel';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FlightService {
 host:string="http://localhost:8084/Flightsdata";
 host1:string="http://localhost:8084/BlockUnblock";
 host2:string="http://localhost:8084/addAirline";
 
  constructor(private http: HttpClient) { } 
  // getFlighInfoByPlace(fromplace:String, toPlace:String){
  //   return this.http.get(this.host+"?fromPlace="+fromplace+"&toPlace="+toPlace);
  // }
  getFlightsInfo(){
    return this.http.get(this.host);
  }
  blockUnblock(airlinename: string, airlinestatus: string){
   // return this.http.put(this.host, airlinename,airlinestatus);
   return this.http.put(this.host1+"?airlineName="+airlinename+"&airlineStatus="+airlinestatus, null);
  }
  save(flightcomponent:any){
    let headers=new HttpHeaders();
    headers.append("Accept", "application/json");
    return this.http.post(this.host2,flightcomponent);

  }
  searchByPlace(fromplace: string, toplace: string){
    return this.http.get("http://localhost:8084/searchByPlaces?fromplace="+fromplace+"&toPlace="+toplace);
  }
}

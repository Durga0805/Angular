import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-serarch',
  templateUrl: './serarch.component.html',
  styleUrls: ['./serarch.component.scss']
})
export class SerarchComponent implements OnInit {
  flightdetails:any[]=[];
  constructor(private _flightservice: FlightService, private router: Router) { }

  ngOnInit(): void {
  }
  search(fromPlace:string, toPlace: string){
   this._flightservice.searchByPlace(fromPlace, toPlace)
   .subscribe({
     next: (res:any)=>{
       console.log(res);  
       this.flightdetails=res;

         }
   })
  }

}

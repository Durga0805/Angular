import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  flightdetails:any[]=[];
  constructor(private _flightservice: FlightService) { }
  ngOnInit(): void {
    this.getFlightsInfo();
   }
  
   getFlightsInfo(){
    this._flightservice.getFlightsInfo()
    .subscribe({
      next: (res:any)=>{
        console.log(res);
       this.flightdetails=res;
      }
    })
   }
  

}

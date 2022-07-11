import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { ViewComponent } from '../view/view.component';



@Component({
  selector: 'app-airline-block',
  templateUrl: './airline-block.component.html',
  styleUrls: ['./airline-block.component.scss']
})
export class AirlineBlockComponent implements OnInit {
     
  constructor(private _flightservice: FlightService,private router: Router) { }
  // flightcomponent:FlightComponent;
   viewcomponent = new ViewComponent(this._flightservice);
  ngOnInit(): void {
   
  }
  blockUnblock(airlinename: string, airlinestatus: string){
  this._flightservice.blockUnblock(airlinename, airlinestatus)
  .subscribe({
    next: (res:any)=>{
      console.log(res);
      this.viewcomponent.getFlightsInfo();
      this.router.navigate(['/view']);

    }
  })

  
  }
}

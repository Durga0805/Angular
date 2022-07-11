import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Airline } from '../airline.model';
import { FlightService } from '../flight.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  flightinfo:FormGroup= new FormGroup({
    airlineName: new FormControl(''),
    airlinestatus: new FormControl(''),
    flightNumber: new FormControl(''),
    fromplace:new FormControl(''),
    toplace:new FormControl(''),
    strdate:new FormControl(''),
    enddate:new FormControl(''),
    strtime:new FormControl(''),
    endtime:new FormControl(''),
    noOfBClassSeats:new FormControl(''),
    noOfNonBClassSeats:new FormControl(''),
    totalseats:new FormControl(''),
    meal:new FormControl('')
  });
  constructor(private _flightservice: FlightService,private fb: FormBuilder) { }

  

  ngOnInit(): void {
    this.flightinfo=this.fb.group({
    airlineName:[''],
    airlinestatus:[''],
    flightNumber:[''],
    fromplace:[''],
    toplace:[''],
    strdate:[''],
    enddate:[''],
    strtime:[''],
    endtime:[''],
    noOfBClassSeats:[''],
    noOfNonBClassSeats:[''],
    totalseats:[''],
    meal:['']
    })
  }
  submitDetals(){
    console.log(this.flightinfo.value);
    this._flightservice.save(this.flightinfo.value)
    .subscribe({
      next:(res:any)=>
      {
        console.log(res);
        
      }
    })
  }
  
  
  getFlightsInfo(){
   this._flightservice.getFlightsInfo()
   .subscribe({
     next: (res:any)=>{
       console.log(res);
       
     }
   })
  }

}

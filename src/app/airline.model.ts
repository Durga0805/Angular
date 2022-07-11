import { Time } from "@angular/common";

export class Airline {
  constructor(  
  public id: number,
  public airlinename: string,
  public airlinestatus: string,
  public flightnumber: number,
  public fromplace: string,
  public toplace: string,
  public strdate: Date,
  public enddate: Date,
  public strtime: Time,
  public endtime: Time,
  public noOfBsClassSeats: number,
  public nonNoOfBsClassSeats: number,
  public price: number,
  public totalseats: number,
  public meal: string
  ){}
    


}

 
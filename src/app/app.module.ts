import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightService } from './flight.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { AirlineBlockComponent } from './airline-block/airline-block.component';
import { SerarchComponent } from './serarch/serarch.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ViewComponent,
    AirlineBlockComponent,
    SerarchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }

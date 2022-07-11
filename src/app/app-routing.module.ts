import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineBlockComponent } from './airline-block/airline-block.component';
import { FlightComponent } from './flight/flight.component';
import { SerarchComponent } from './serarch/serarch.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: 'flight', component: FlightComponent},
  {path: 'view', component: ViewComponent},
  {path: 'airline-block', component: AirlineBlockComponent},
  {path: 'search', component: SerarchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FlightComponent];

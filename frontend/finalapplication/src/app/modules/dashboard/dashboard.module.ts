import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DetailsComponent } from './details/details.component';
import { MygraphComponent } from './mygraph/mygraph.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    DetailsComponent,
    MygraphComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

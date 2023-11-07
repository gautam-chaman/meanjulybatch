import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DetailsComponent } from './details/details.component';
import { MygraphComponent } from './mygraph/mygraph.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ViewdataComponent } from './viewdata/viewdata.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    DetailsComponent,
    MygraphComponent,
    EditComponent,
    ViewdataComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class DashboardModule { }

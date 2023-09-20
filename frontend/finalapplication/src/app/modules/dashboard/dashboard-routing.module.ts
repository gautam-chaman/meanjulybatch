import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DetailsComponent } from './details/details.component';
import { MygraphComponent } from './mygraph/mygraph.component';
import { EditrecordComponent } from '../auth/editrecord/editrecord.component';

const routes: Routes = [

{path:'',component:LandingpageComponent},
{path:'details',component:DetailsComponent},
{path:'mygraph',component:MygraphComponent},
{path:'dashboard/edit',component:EditrecordComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

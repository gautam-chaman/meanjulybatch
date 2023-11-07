import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DetailsComponent } from './details/details.component';
import { MygraphComponent } from './mygraph/mygraph.component';
import { EditComponent } from './edit/edit.component';
import { ViewdataComponent } from './viewdata/viewdata.component';


const routes: Routes = [

{path:'',component:LandingpageComponent},
{path:'details',component:DetailsComponent},
{path:'mygraph',component:MygraphComponent},
{path:'edit/:id',component:EditComponent},
{path:'view/:id',component:ViewdataComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

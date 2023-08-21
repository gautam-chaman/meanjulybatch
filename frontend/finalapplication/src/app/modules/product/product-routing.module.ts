import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [

  {path:'',component:NewproductComponent},
  {path:'productdetails',component:ProductdetailsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

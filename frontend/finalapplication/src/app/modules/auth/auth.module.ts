import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class AuthModule { }

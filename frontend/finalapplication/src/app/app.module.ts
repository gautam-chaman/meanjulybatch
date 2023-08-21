import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankpageComponent } from './layout/blankpage/blankpage.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlankpageComponent,
    FullpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

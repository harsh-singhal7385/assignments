import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InrComponent } from './inr/inr.component';
import { UsdComponent } from './usd/usd.component';
import { CadComponent } from './cad/cad.component';
import { EuroComponent } from './euro/euro.component';
import { AedComponent } from './aed/aed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InrComponent,
    UsdComponent,
    CadComponent,
    EuroComponent,
    AedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

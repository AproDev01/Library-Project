import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuileComponent } from './acceuile/acceuile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { IdDetaileComponent } from './id-detaile/id-detaile.component';
import { AjouterAuPanierComponent } from './ajouter-au-panier/ajouter-au-panier.component';
import {  ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AcceuileComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AjouterAuPanierComponent,
    CatalogueComponent,
    IdDetaileComponent,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './product/product.component';

import { PopUpComponent } from './pop-up/pop-up.component';
import { DialogOtherCategroyComponent } from './dialog-other-categroy/dialog-other-categroy.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { TraiterCommadeComponent } from './traiter-commade/traiter-commade.component';
import { AfficherCommandesComponent } from './afficher-commandes/afficher-commandes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,  
    PopUpComponent, DialogOtherCategroyComponent, CommandeClientComponent, TraiterCommadeComponent, AfficherCommandesComponent
  ],
  
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
FlexLayoutModule  
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

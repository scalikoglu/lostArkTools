import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BodyComponent } from './body/body.component';
import { BookPriceCalculatorComponent } from './components/book-price-calculator/book-price-calculator.component';
import { ItemXpCalculatorComponent } from './components/item-xp-calculator/item-xp-calculator.component';
import { MatTableModule } from '@angular/material/table' 
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    BookPriceCalculatorComponent,
    ItemXpCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatTableModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

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
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { TopCardComponent } from './components/top-card/top-card.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatGridListModule} from '@angular/material/grid-list';
import { MapPriceCalculatorComponent } from './components/map-price-calculator/map-price-calculator.component';
import { MatSelectModule} from '@angular/material/select';

import { MtxTooltipModule } from '@ng-matero/extensions/tooltip';
import { MtxGridModule } from '@ng-matero/extensions/grid';
import { MtxSelectModule } from '@ng-matero/extensions/select';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    BookPriceCalculatorComponent,
    ItemXpCalculatorComponent,
    TopCardComponent,
    MapPriceCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSelectModule,
    MtxTooltipModule,
    MtxGridModule,
    MtxSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

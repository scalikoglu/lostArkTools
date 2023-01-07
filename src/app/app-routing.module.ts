import { MapPriceCalculatorComponent } from './components/map-price-calculator/map-price-calculator.component';
import { TopCardComponent } from './components/top-card/top-card.component';
import { ItemXpCalculatorComponent } from './components/item-xp-calculator/item-xp-calculator.component';
import { BookPriceCalculatorComponent } from './components/book-price-calculator/book-price-calculator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bookpricecalculator', pathMatch: 'full' },
  { path: 'bookpricecalculator', component: BookPriceCalculatorComponent},
  { path: 'itemxpcalculator', component: ItemXpCalculatorComponent},
  { path: 'mappricecalculator', component: MapPriceCalculatorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

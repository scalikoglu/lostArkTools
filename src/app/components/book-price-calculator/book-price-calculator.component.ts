import {Component, OnInit} from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

export interface PeriodicElement {
  type: string;
  position: number;
  offer: number;
  income: number;
  myProfit: number;
  teamProfit: number;

}

/**
 * @title Styling columns using their auto-generated column names
 */

@Component({
  selector: 'app-book-price-calculator',
  templateUrl: './book-price-calculator.component.html',
  styleUrls: ['./book-price-calculator.component.css']
})
export class BookPriceCalculatorComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['type', 'offer', 'income', 'myProfit', 'teamProfit'];
  dataSource: any
  price: any 
 
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new UntypedFormControl(this.positionOptions[0]);

 temizle(){
  
  }

  ngOnInit(): void {
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, type: 'En İyi Teklif', offer: 0,income:0, myProfit: 0, teamProfit: 0},
      {position: 2, type: 'Ortalama Teklif', offer: 0,income:0, myProfit: 0, teamProfit: 0},
      {position: 3, type: 'Kötü Teklif', offer: 0,income:0, myProfit: 0, teamProfit: 0},
      {position: 4, type: 'Zarar Teklif', offer: 0,income:0, myProfit: 0, teamProfit: 0},
    ];
    this.dataSource = ELEMENT_DATA;
  }

  onKeypressEvent(event: any){
    console.log(event.target.value);
  }

  onSubmit(value: any) {

    console.log(value.target.value);

    this.price = value.target.value
    let bookPrice = value.target.value
    let minPrice = 1
    let komisyon = (bookPrice*5)/100
    let bookPriceWithOutKomisyon = bookPrice - komisyon
    let teamPrice = bookPriceWithOutKomisyon / 8
 
    let bestBit = bookPriceWithOutKomisyon - teamPrice * 2
    let bestDeal = bookPriceWithOutKomisyon - (bookPriceWithOutKomisyon - teamPrice * 2)
    let bestTeamPrice = bestBit / 7
    let bestIncome = bestDeal-bestTeamPrice

    let goodBit = bookPriceWithOutKomisyon - teamPrice * 1.7
    let goodDeal = bookPriceWithOutKomisyon - (bookPriceWithOutKomisyon - teamPrice * 1.7)
    let goodTeamPrice = goodBit / 7
    let goodIncome = goodDeal - goodTeamPrice

    let normalBit = bookPriceWithOutKomisyon - teamPrice * 1.5
    let normalDeal = bookPriceWithOutKomisyon - (bookPriceWithOutKomisyon - teamPrice * 1.5)
    let normalTeamPrice = normalBit / 7
    let normalIncome = normalDeal - normalTeamPrice

    let Bit = bookPriceWithOutKomisyon - teamPrice * 1
    let Deal = bookPriceWithOutKomisyon - (bookPriceWithOutKomisyon - teamPrice * 1)
    let TeamPrice = Bit / 7
    let Income = Deal - TeamPrice

    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, type: 'En İyi Teklif', offer: Math.round(bestBit),income:Math.round(bestIncome), myProfit: Math.round(bestDeal), teamProfit: Math.round(bestTeamPrice)},
      {position: 2, type: 'Ortalama Teklif', offer: Math.round(goodBit),income:Math.round(goodIncome), myProfit: Math.round(goodDeal), teamProfit: Math.round(goodTeamPrice)},
      {position: 3, type: 'Kötü Teklif', offer: Math.round(normalBit),income:Math.round(normalIncome), myProfit: Math.round(normalDeal), teamProfit: Math.round(normalTeamPrice)},
      {position: 4, type: 'Zarar Teklif', offer: Math.round(Bit),income:Math.round(Income), myProfit: Math.round(Deal), teamProfit: Math.round(TeamPrice)},
    ];

    this.dataSource = ELEMENT_DATA;
  }

}

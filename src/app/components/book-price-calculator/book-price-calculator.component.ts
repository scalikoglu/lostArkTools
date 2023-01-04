import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  type: string;
  position: number;
  profit: number;
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

  displayedColumns: string[] = ['type', 'profit', 'myProfit', 'teamProfit'];
  dataSource: any
  
  ngOnInit(): void {
    this.bookPriceCalculateIt()
  }

  bookPriceCalculateIt(){

    let bookPrice = 5000
    let minPrice = 1
    let komisyon = (bookPrice*5)/100
    let bookPriceWithOutKomisyon = bookPrice - komisyon
    let teamPrice = bookPriceWithOutKomisyon / 8
 
    let bestBit = bookPriceWithOutKomisyon - teamPrice * 2
    let bestDeal = bookPriceWithOutKomisyon - (bookPriceWithOutKomisyon - teamPrice * 2)
    let bestTeamPrice = bestBit / 7

    let goodBit = bookPriceWithOutKomisyon - teamPrice * 1.7
    let goodDeal = bookPriceWithOutKomisyon - (bookPriceWithOutKomisyon - teamPrice * 1.7)
    let goodTeamPrice = bestBit / 7

    let normalBit = bookPriceWithOutKomisyon - teamPrice * 1.5
    let normalDeal = bookPriceWithOutKomisyon - (bookPriceWithOutKomisyon - teamPrice * 1.5)
    let normalTeamPrice = bestBit / 7

    let Bit = bookPriceWithOutKomisyon - teamPrice * 1
    let Deal = bookPriceWithOutKomisyon - (bookPriceWithOutKomisyon - teamPrice * 1)
    let TeamPrice = bestBit / 7

    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, type: 'En İyi Teklif', profit: bestBit, myProfit: bestDeal, teamProfit: bestTeamPrice},
      {position: 2, type: 'Ortalama Teklif', profit: goodBit, myProfit: goodDeal, teamProfit: goodTeamPrice},
      {position: 3, type: 'Kötü Teklif', profit: normalBit, myProfit: normalDeal, teamProfit: normalTeamPrice},
      {position: 4, type: 'Zarar Teklif', profit: Bit, myProfit: Deal, teamProfit: TeamPrice},
    
    ];
    this.dataSource = ELEMENT_DATA;
  }

}

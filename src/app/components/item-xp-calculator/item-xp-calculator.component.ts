import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-xp-calculator',
  templateUrl: './item-xp-calculator.component.html',
  styleUrls: ['./item-xp-calculator.component.css']
})
export class ItemXpCalculatorComponent implements OnInit {

  currentTotalGame:number = 0  //Oynanan toplam maç sayısı
  currentWinRate:number = 0  //Anlık kazanma oranı
  currentAimRate:number = 0  //Hedeflenen kazanma oranı
  hiddenDiv: boolean = false  //Gizli divi açıyoruz

  currentTotalLose:number = 0  //Hesaplanan toplam kaybedilen maç sayısı
  needTotalGame:number = 0  //Hesaplanan toplam oynanan maç sayısı ve ardarda kazanılması gereken maç sayısının toplamı
  needWinGame:number = 0  //Ardarda kazanılması gereken maç sayısı
  winRate:number = 0  //Hesaplama sonucu currentWinRate'i yüzdelik şekilde yazıyoruz
  aimRate:number = 0  //Hesaplama sonucu currentAimRate'i yüzdelik şekilde yazıyoruz

  constructor() { }

  ngOnInit(): void {
  }
  setTotalGame(value: any){
    this.currentTotalGame = value.target.value
    this.calculateIt()
  }
  setRateGame(value: any){
    this.currentWinRate = value.target.value
    this.calculateIt()
  }
  setAimRateGame(value: any){
    this.currentAimRate = value.target.value
    this.calculateIt()
  }

  calculateIt(){

  this.winRate = 1-(this.currentWinRate*0.01)
  this.currentTotalLose = this.currentTotalGame * (1-(this.currentWinRate*0.01))
  this.aimRate = 1-(this.currentAimRate*0.01)
  this.needTotalGame = this.currentTotalLose / this.aimRate
  this.needWinGame = this.needTotalGame - this.currentTotalGame

  }

  setHiddenDiv(){
    if(this.hiddenDiv==true)
    this.hiddenDiv = false
    else
    this.hiddenDiv = true
  }
}

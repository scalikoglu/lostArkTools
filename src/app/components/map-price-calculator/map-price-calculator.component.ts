import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-price-calculator',
  templateUrl: './map-price-calculator.component.html',
  styleUrls: ['./map-price-calculator.component.css']
})
export class MapPriceCalculatorComponent implements OnInit {
  solarProtectionEach:number = 4
  solarBlessingEach:number = 8
  solarGraceEach:number = 12
  honorShardPounchEach:number = 8

  solarProtectionPrice:number = 0
  solarBlessingPrice:number = 0
  solarGracePrice:number = 0
  honorShardPounchPrice:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  //Set item price
  setSolarProtectionPrice(value: any) {
    this.solarProtectionPrice = value.target.value
  }
  setHonorShardPounchPrice(value: any) {
    this.honorShardPounchPrice = value.target.value
  }
  setSolarGracePrice(value: any) {
    this.solarGracePrice = value.target.value
  }
  setSolarBlessingPrice(value: any) {
    this.solarBlessingPrice = value.target.value
  }


  //Set item each
  setSolarProtectionEach(value: any) {
    this.solarProtectionEach = value.target.value
  }
  setHonorShardPounchEach(value: any) {
    this.honorShardPounchEach = value.target.value
  }
  setSolarGraceEach(value: any) {
    this.solarGraceEach = value.target.value
  }
  setSolarBlessingEach(value: any) {
    this.solarBlessingEach = value.target.value
  }
  

}


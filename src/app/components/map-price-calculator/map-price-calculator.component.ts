import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-price-calculator',
  templateUrl: './map-price-calculator.component.html',
  styleUrls: ['./map-price-calculator.component.css']
})
export class MapPriceCalculatorComponent implements OnInit {
  solarProtection:number = 0
  solarBlessing:number = 0
  solarGrace:number = 0
  honorShardPounch:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  setSolarProtection(value: any) {
    this.solarProtection = value.target.value

  }

  setHonorShardPounch(value: any) {
    this.honorShardPounch = value.target.value

  }

  setSolarGrace(value: any) {
    this.solarGrace = value.target.value

  }

  getSolarBlessing(value: any) {
    this.solarBlessing = value.target.value

  }

}


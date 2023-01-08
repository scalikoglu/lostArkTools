import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-map-price-calculator',
  templateUrl: './map-price-calculator.component.html',
  styleUrls: ['./map-price-calculator.component.css']
})
export class MapPriceCalculatorComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new UntypedFormControl(this.positionOptions[0]);

  solarProtectionEach:number = 0
  solarBlessingEach:number = 0
  solarGraceEach:number = 0
  honorShardPounchLargeEach:number = 0
  honorShardPounchMediumEach:number = 0
  honorShardPounchSmallEach:number = 0

  solarProtectionPrice:number = 0
  solarBlessingPrice:number = 0
  solarGracePrice:number = 0
  honorShardPounchLargePrice:number = 0
  honorShardPounchMediumPrice:number = 0
  honorShardPounchSmallPrice:number = 0

  selectedMap?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  //Set item price
  setSolarProtectionPrice(value: any) {
    this.solarProtectionPrice = value.target.value
  }
  setSolarGracePrice(value: any) {
    this.solarGracePrice = value.target.value
  }
  setSolarBlessingPrice(value: any) {
    this.solarBlessingPrice = value.target.value
  }
  //set honor shards price
  setHonorShardPounchLargePrice(value: any) {
    this.honorShardPounchLargePrice = value.target.value
  }
  setHonorShardPounchMediumPrice(value: any) {
    this.honorShardPounchMediumPrice = value.target.value
  }
  setHonorShardPounchSmallPrice(value: any) {
    this.honorShardPounchSmallPrice = value.target.value
  }

  //Set item each
  setSolarProtectionEach(value: any) {
    this.solarProtectionEach = value.target.value
  }
  setSolarGraceEach(value: any) {
    this.solarGraceEach = value.target.value
  }
  setSolarBlessingEach(value: any) {
    this.solarBlessingEach = value.target.value
  }  

  //set honor shards each
  setHonorShardPounchLargeEach(value: any) {
    this.honorShardPounchLargeEach = value.target.value
  }
  setHonorShardPounchMediumEach(value: any) {
    this.honorShardPounchMediumEach = value.target.value
  }
  setHonorShardPounchSmallEach(value: any) {
    this.honorShardPounchSmallEach = value.target.value
  }
  
  setLegendaryMap(){
    this.solarProtectionEach= 4
    this.solarBlessingEach = 8
    this.solarGraceEach = 12
    this.honorShardPounchLargeEach = 8
    this.honorShardPounchMediumEach = 0
    this.honorShardPounchSmallEach = 0
  }

  setEpikMap(){
    this.solarProtectionEach= 2
    this.solarBlessingEach = 4
    this.solarGraceEach = 4
    this.honorShardPounchLargeEach = 0
    this.honorShardPounchMediumEach = 4
    this.honorShardPounchSmallEach = 0
  }

  setRareMap(){
    this.solarProtectionEach= 0
    this.solarBlessingEach = 1
    this.solarGraceEach = 4
    this.honorShardPounchLargeEach = 0
    this.honorShardPounchMediumEach = 0
    this.honorShardPounchSmallEach = 4
  }

}


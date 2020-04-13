import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit(): void {
  }

  countTypeOfSatellites(satelliteArray, satelliteType){
    let countNoOfSat = 0;
    for(let currentSat in satelliteArray){
      let currentSatelliteType = satelliteArray[currentSat].type.toLowerCase();
      if(currentSatelliteType === satelliteType.toLowerCase()){
        countNoOfSat++;
      }
    }
    return countNoOfSat;
  }

}

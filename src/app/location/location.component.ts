import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  latitude = 43.249923;
  longitude = 76.958143;
  locationChosen = true;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jubmotron',
  templateUrl: './jubmotron.component.html',
  styleUrls: ['./jubmotron.component.scss']
})
export class JubmotronComponent implements OnInit {

  jbtHeading: string;
  jbtText: string;
  // jbtBtnTxt: string;
  // jbtBtnUrl: string;

  constructor() {
    this.jbtHeading = 'Mimi Kitchen';
    this.jbtText = '«Mimi»';
   }

  ngOnInit() {
  }

}

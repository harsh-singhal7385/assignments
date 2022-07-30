import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

 
  title = "display"
  @Input('childDataArrived') public data : any

}

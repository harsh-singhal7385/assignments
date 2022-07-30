import { Component } from '@angular/core';
import { DataFetcherService } from './data-fetcher.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bdaysort';

  sort_criteria : any 
  constructor(){}

  receiveFromRadioFn($event:any){
    console.log($event,"inside app component")
    this.sort_criteria = $event
  }

}

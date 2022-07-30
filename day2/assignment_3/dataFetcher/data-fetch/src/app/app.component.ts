import { Component } from '@angular/core';
import { DataLoaderService } from './data-loader.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-fetch';

  constructor (private appServices : DataLoaderService ) {}
  data:any 

  async loadDataFromServices(){
    await this.appServices.loadData().subscribe((res)=>{
      this.data = res
    })
    
  }

}

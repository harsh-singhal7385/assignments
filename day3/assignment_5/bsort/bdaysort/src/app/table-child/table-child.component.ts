import { Component, OnInit , OnChanges, Input} from '@angular/core';
import { DataFetcherService } from '../data-fetcher.service' 

@Component({
  selector: 'app-table-child',
  templateUrl: './table-child.component.html',
  styleUrls: ['./table-child.component.css']
})

export class TableChildComponent implements OnInit {

  constructor(private appDataService : DataFetcherService) { }

  data : any
  final_data : any
  ngOnInit(): void {
    this.appDataService.loadDataFromJSON().subscribe((res)=>{
      this.data = res
    })  
    
  }
   i:any = 0
 async ngOnChanges(){
    await this.appDataService.loadDataFromJSON().subscribe((res)=>{
      this.final_data = res
    }) 
    console.log(this.final_data)
    console.log("inside onchabges",this.i)
    if(((this.i++)>0)&&(this.data_received!="")){

      console.log(this.data_received)
      console.log("inside table ")

      if(this.data_received['sort'] == "name_sort"){
        // await this.final_data.sort(function (a:any, b:any) {
        //   let aa = a.name
        //   let bb = b.name
        //   console.log(aa,bb)
        //   return aa-bb
        // });
        await this.final_data.sort(function(a:any, b:any){
          if(a['name'] < b['name']) { return -1; }
          if(a['name'] > b['name']) { return 1; }
          return 0;
      })
        console.log("inside name cat\n",this.final_data)
      }
      else
      {
        await this.final_data.sort(function (a:any, b:any) {
          let dateA: any = new Date(a.date);
          let dateB : any= new Date(b.date);
          console.log(dateA,dateB)
          return dateA - dateB
        });
        console.log("inside date cat\n",this.final_data)

      }
      this.data = this.final_data
    }else{
      this.data = this.final_data
    }
  }

  @Input('parentToChild') data_received : any = ""

  

}

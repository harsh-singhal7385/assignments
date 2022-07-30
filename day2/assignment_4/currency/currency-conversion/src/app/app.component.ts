import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-conversion';
  
  obj : any = {
    "USD" : 80,
    "CAD" : 30,
    "AED" : 20,
    "EURO" : 100,
    "INR" : 1
  }
  //list : string[] = []
  resend_data : string = ""
  resend_data_complete : string = ""
   myNum : any 
  display(list:string[]){
    
    let x = this.obj[list[0]]
    let y = this.obj[list[1]] 
    // console.log(x/y)
    this.myNum = (x/y).toFixed(4)
    console.log(this.myNum)
    this.resend_data = `1 Quantity of ${list[0]} is equivalent to ${this.myNum} of ${list[1]} `
    this.resend_data_complete = `${list[2]} Quantity of ${list[0]} is equivalent to ${(Number(list[2])*this.myNum).toFixed(4)} of ${list[1]} `
    console.log(this.resend_data)
    this.myNum = (Number(list[2])*this.myNum).toFixed(4)
  }

}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class UsdComponent implements OnInit {

  constructor() { }
  
  INR = "INR"
  EURO = "EURO"
  CAD = "CAD"
  USD = "USD"
  AED = "AED"

  formData = new FormGroup({
    currency_1 : new FormControl('',Validators.required),
    currency_2 : new FormControl('',Validators.required),
    number_1 : new FormControl('',Validators.required),
    number_2 : new FormControl('',Validators.required),
  })

  li : string[]= []
  
  first : any
  second : any

  myInputNumber : Number = 1


  @Input('parentCurrency') currency_obtained : any
  @Input('parentCurrencyComplete') currency_obtained_complete : any
  @Input('parentCurrencyNumber') currency_final : any
  @Output() childEvent  = new EventEmitter()
   
  onSubmitToServer(formData : FormGroup){
    this.li.splice(0,this.li.length);
    // console.log(this.formData.value)
    this.li.push(this.formData.value['currency_1'])
    this.li.push(this.formData.value['currency_2'])
    this.li.push(this.formData.value['number_1'])
    this.first = this.formData.value['currency_1']
    this.second = this.formData.value['currency_2']
    console.log(this.li)
    this.childEvent.emit(this.li)
  }


  ngOnInit(): void {

  }

}

import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio-child',
  templateUrl: './radio-child.component.html',
  styleUrls: ['./radio-child.component.css']
})
export class RadioChildComponent implements OnInit {

  constructor() { }

  name_sort : any = "name_sort"
  age_sort : any = "age_sort"
  sort_criteria : any = ""

  ngOnInit(): void {
  }

  formData = new FormGroup({
    sort : new FormControl('',Validators.required),
  });

  @Output() childData = new EventEmitter()

  SubmitToParent(formData : FormGroup){
    this.childData.emit(this.formData.value)
  }
}


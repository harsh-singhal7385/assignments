import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import url_json  from './data.json';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  constructor(private http : HttpClient) { }  
  
  loadDataFromJSON(){
    return this.http.get('assets/data.json')
  }
  
}

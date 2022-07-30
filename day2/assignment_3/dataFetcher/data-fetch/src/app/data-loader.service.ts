import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class DataLoaderService {

  constructor(private http: HttpClient) { }

  public loadData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}

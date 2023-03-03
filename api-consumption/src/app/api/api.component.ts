import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getMethod();
  }

  public getMethod() void:{
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }
}

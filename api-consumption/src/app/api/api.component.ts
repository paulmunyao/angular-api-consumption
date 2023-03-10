import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  // https://api.assemblyai.com/v2/transcript
  public getMethod(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((data) => {
        console.log(data);
        this.getJsonValue = data;
      });
  }

  public postMethod(): void {
    let body = {
      title: 'The art of war',
      body: 'Sun Tzu',
      userId: 1,
    },
    let bo ={
      title: 'The art of war',
      body: 'Sun Tzu',
      userId: 1,
    };

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', body)
      .subscribe((data) => {
        console.log(data);
        this.postJsonValue = data;
      });
  }
}

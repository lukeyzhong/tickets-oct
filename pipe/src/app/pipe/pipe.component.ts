import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  obj = {
    name: 'jojo',
    age: 12,
    company: 'jump',
  };

  users$: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sorting() {
    return 0;
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

}

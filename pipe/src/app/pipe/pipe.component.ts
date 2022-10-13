import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  subscription!: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.users$ = this.getUsers().subscribe();
  }

  sorting() {
    return 0;
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit, OnDestroy {
  obj = {
    name: 'jojo',
    age: 12,
    company: 'jump',
  };

  users: any;
  subscription!: Subscription;
  users$: any;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.subscription = this.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  sorting() {
    return 0;
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

}

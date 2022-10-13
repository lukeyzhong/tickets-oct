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

  constructor() { }

  ngOnInit(): void {
  }

}

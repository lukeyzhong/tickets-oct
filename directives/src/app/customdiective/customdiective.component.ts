import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-customdiective',
  templateUrl: './customdiective.component.html',
  styleUrls: ['./customdiective.component.css']
})
export class CustomdiectiveComponent implements OnInit {
  color!: string;
  constructor() { }

  ngOnInit(): void {
  }


}

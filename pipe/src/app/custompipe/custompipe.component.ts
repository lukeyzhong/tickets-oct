import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})

export class CustompipeComponent implements OnInit {

  celcius!: number;
  Fahrenheit!: number;  

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bye-component',
  templateUrl: './bye-component.component.html',
  styleUrls: ['./bye-component.component.css']
})
export class ByeComponentComponent implements OnInit {
  
  @Input() apellido: string;

  constructor() { }

  ngOnInit() {
  }

}
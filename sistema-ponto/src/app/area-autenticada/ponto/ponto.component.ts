import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css']
})
export class PontoComponent implements OnInit {

  realTime: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

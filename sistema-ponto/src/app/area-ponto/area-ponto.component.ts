import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-ponto',
  templateUrl: './area-ponto.component.html',
  styleUrls: ['./area-ponto.component.css']
})
export class AreaPontoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage['token'] != 'colaboradorlogado' ){
      this.router.navigate(['']);
  }
}

}

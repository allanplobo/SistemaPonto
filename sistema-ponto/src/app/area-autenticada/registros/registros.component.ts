import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage['token'] != "admlogado"){
      this.router.navigate(['area-autenticada']);
    }
  }

}

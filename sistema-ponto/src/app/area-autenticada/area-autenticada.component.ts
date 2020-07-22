import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'area-autenticada',
  templateUrl: './area-autenticada.component.html',
  styleUrls: ['./area-autenticada.component.css'],
})
export class AreaAutenticadaComponent implements OnInit {
  constructor(private router: Router) {}
  admLogado: boolean = false;
  colaboradorLogado: boolean = false;

  ngOnInit(): void {
    if (localStorage['token'] == null) {
      this.router.navigate(['area-login']);
    }
    if (localStorage['token'] == "admlogado"){
      this.admLogado = true;
    }
    if (localStorage['token'] == "colaboradorlogado"){
      this.colaboradorLogado = true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}

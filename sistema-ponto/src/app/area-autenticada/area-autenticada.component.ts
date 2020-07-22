import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'area-autenticada',
  templateUrl: './area-autenticada.component.html',
  styleUrls: ['./area-autenticada.component.css'],
})
export class AreaAutenticadaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage['token'] == null) {
      this.router.navigate(['']);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}

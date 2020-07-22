import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
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

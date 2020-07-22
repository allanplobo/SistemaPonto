import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  admLogado: boolean = false;
  colaboradorLogado: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage['token'] == "admlogado"){
      this.admLogado = true;
    }

    if (localStorage['token'] == "colaboradorlogado"){
      this.colaboradorLogado = true;
    }
  }

}

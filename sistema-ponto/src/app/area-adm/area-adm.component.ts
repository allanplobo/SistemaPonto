import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-adm',
  templateUrl: './area-adm.component.html',
  styleUrls: ['./area-adm.component.css']
})
export class AreaAdmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage['token'] != 'admlogado' ){
      this.router.navigate(['']);
    }
  }

}

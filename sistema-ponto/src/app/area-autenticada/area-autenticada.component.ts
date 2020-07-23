import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

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
    if (localStorage['token'] == 'admlogado') {
      this.admLogado = true;
    }
    if (localStorage['token'] == 'colaboradorlogado') {
      this.colaboradorLogado = true;
    }
  }

  logout() {
    if (localStorage['pontoIniciado'] != null) {
      swal({
        title: 'Ponto em andamento',
        text: 'Finalize o dia para sair do sistema! ',
        icon: 'error',
      });
      return;
    } else {
      localStorage.clear();
      this.router.navigate(['']);
    }
  }
}

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
    if (localStorage['pontoIniciado'] == 'true') {
      swal({
        title: 'Ponto em andamento',
        text: 'Finalize o dia para sair do sistema! ',
        icon: 'error',
      });
      return;
    } else {
      swal({
        title: 'Deseja realmente sair do sistema?',
        icon: 'warning',
        dangerMode: true,
        buttons: ['Não', 'Sim'],
      }).then((sair) => {
        if (sair) {
          swal('Poof! Your imaginary file has been deleted!', {
            icon: 'success',
          });

          localStorage.clear();
          this.router.navigate(['']);

          swal({
            title: 'Você saiu do sistema!',
            icon: 'success',
          });
        } else {
          return;
        }
      });

      // localStorage.clear();
      // this.router.navigate(['']);
      // swal({
      //   title: 'Você saiu do sistema!',
      //   icon: 'success',
      // });
    }
  }
}

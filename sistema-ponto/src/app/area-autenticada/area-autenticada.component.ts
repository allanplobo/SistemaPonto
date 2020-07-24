import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { Ponto, PontoService } from './services/ponto.service';

@Component({
  selector: 'area-autenticada',
  templateUrl: './area-autenticada.component.html',
  styleUrls: ['./area-autenticada.component.css'],
})
export class AreaAutenticadaComponent implements OnInit {
  constructor(private router: Router, private pontoService: PontoService) {}
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

    if(localStorage['historicoSalvo'] == "") {

      const ponto = new Ponto();
      (ponto.nome = "Allan"),
      (ponto.pontoInicio = new Date(2020,7,22, 8,0,0)),
      (ponto.pontoFim =new Date(2020,7,22, 19,0,0)),
      (ponto.almocoInicio = new Date(2020,7,22, 12,0,0)),
      (ponto.almocoFim = new Date(2020,7,22, 13,0,0)),
      this.pontoService.incluir(ponto)
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
    }
  }
}

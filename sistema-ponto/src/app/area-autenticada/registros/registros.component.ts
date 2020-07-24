import { FormControl } from '@angular/forms';
import { PontoService, Ponto } from './../services/ponto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, switchMap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
})
export class RegistrosComponent implements OnInit {
  registros: Observable<Ponto[]>;
  colunas: string[] = ['nome', 'data', 'entrada', 'almoco', 'saida', 'saldo'];
  filtro: FormControl;

  constructor(
    private readonly pontoService: PontoService,
    private router: Router
  ) {
    this.filtro = new FormControl();
  }

  ngOnInit() {
    if (localStorage['token'] != 'admlogado') {
      this.router.navigate(['area-autenticada']);
    }
    this.pontoService.load();
    this.registros = this.filtro.valueChanges.pipe(
      startWith(''),
      switchMap((value) => {
        return this.pontoService.historicoAtualizou.pipe(
          tap(),
          map((x) => x.filter((y) => y.nome.startsWith(value)))
        );
      })
    );
  }

  pad(n, z?) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  msToTime(s) {

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return this.pad(hrs) + ':' + this.pad(mins) + ':' + this.pad(secs);
  }

  saldo(ponto: Ponto) {
    return this.msToTime(
      ponto.pontoFim.getTime() -
      ponto.pontoInicio.getTime() -
      (ponto.almocoFim.getTime() - ponto.almocoInicio.getTime())
    );
  }

  almocoMedia(ponto: Ponto) {
    return this.msToTime(
      ponto.almocoFim.getTime() - ponto.almocoInicio.getTime()
    );
  }
}

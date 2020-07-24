import { PontoService, Ponto } from './../services/ponto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, startWith, switchMap, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {
  historico: Observable<Ponto[]>;
  colunas: string[] = ['data', 'entrada', 'almoco', 'saida', 'saldo'];
  filtro: FormControl;

  constructor(private readonly pontoService: PontoService) {
    this.filtro = new FormControl();
  }

  ngOnInit() {
    this.pontoService.load();
    this.historico = this.pontoService.historicoAtualizou.pipe(
      tap()
    );
    this.historico = this.filtro.valueChanges.pipe(
      startWith(localStorage['nomeUsuario']),
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

import { PontoService, Ponto } from './../services/ponto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {
  historico: Observable<Ponto[]>;
  colunas: string[] = ['data', 'entrada', 'almoco', 'saida', 'saldo'];

  constructor(private readonly pontoService: PontoService) {}

  ngOnInit() {
    this.pontoService.load();
    this.historico = this.pontoService.historicoAtualizou.pipe(
      tap(console.log)
    );
  }

  saldo(ponto: Ponto) {
    console.log(ponto);

    return (
      ponto.pontoFim.getTime() -
      ponto.pontoInicio.getTime() -
      (ponto.almocoFim.getTime() - ponto.almocoInicio.getTime())
    );
  }
}

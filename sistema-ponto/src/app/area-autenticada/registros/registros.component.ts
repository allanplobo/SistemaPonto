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
  colunas: string[] = ['data', 'entrada', 'almoco', 'saida', 'saldo'];
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
          tap(console.log),
          map((x) => x.filter((y) => y.nome.startsWith(value)))
        );
      })
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

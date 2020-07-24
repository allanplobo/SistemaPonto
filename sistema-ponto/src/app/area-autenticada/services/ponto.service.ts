import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Ponto {
  nome: string;
  pontoInicio: Date;
  pontoFim: Date;
  almocoInicio: Date;
  almocoFim: Date;

  constructor(ponto?: any) {
    if (!ponto) {
      return;
    }
    this.nome = ponto.nome;
    this.pontoInicio = new Date(ponto.pontoInicio);
    this.pontoFim = new Date(ponto.pontoFim);
    this.almocoInicio = new Date(ponto.almocoInicio);
    this.almocoFim = new Date(ponto.almocoFim);
  }
}

@Injectable()
export class PontoService {
  historicoAtualizou: BehaviorSubject<Ponto[]>;
  historicos: Ponto[];

  constructor() {
    this.historicos = [];
    this.historicoAtualizou = new BehaviorSubject<Ponto[]>([
      {
        nome: 'Allan',
        pontoInicio: new Date(2020,7,22, 8,0,0),
        pontoFim: new Date(2020,7,22, 19,0,0),
        almocoInicio: new Date(2020,7,22, 12,0,0),
        almocoFim: new Date(2020,7,22, 13,0,0),
      },
      {
        nome: 'Administrador',
        pontoInicio: new Date(2020,7,22, 8,1,0),
        pontoFim: new Date(2020,7,22, 18,0,0),
        almocoInicio: new Date(2020,7,22, 12,0,0),
        almocoFim: new Date(2020,7,22, 13,0,0),
      },
    ]);
  }

  load() {
    const historicoJson = localStorage.getItem('historicoSalvo');
    if (historicoJson == null) {
      this.historicos = [];
      return;
    }

    const lista = JSON.parse(historicoJson);

    this.historicos = lista.map((x) => {
      return new Ponto(x);
    });

    this.historicoAtualizou.next(this.historicos);

  }

  save() {
    const historicoJson = JSON.stringify(this.historicos);
    localStorage.setItem('historicoSalvo', historicoJson);
  }

  incluir(ponto: Ponto) {
    this.historicos.push(ponto);
    this.historicoAtualizou.next(this.historicos);
    this.save();
  }
}

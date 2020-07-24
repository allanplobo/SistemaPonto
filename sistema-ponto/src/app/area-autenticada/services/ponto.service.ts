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
      // {
      //   nome: 'Allan',
      //   data: '23/07/2020',
      //   entrada: '08:06:00',
      //   almoco: '01:10:00',
      //   saida: '18:00:00',
      // },
      // {
      //   nome: 'Geovany',
      //   data: '22/07/2020',
      //   entrada: '08:01:00',
      //   almoco: '01:01:00',
      //   saida: '18:15:00',
      // },
      // {
      //   nome: 'José',
      //   data: '21/07/2020',
      //   entrada: '08:20:00',
      //   almoco: '01:00:00',
      //   saida: '18:10:00',
      // },
      // {
      //   nome: 'Lorraine',
      //   data: '20/07/2020',
      //   entrada: '08:10:00',
      //   almoco: '00:55:00',
      //   saida: '17:59:00',
      // },
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

import { PontoService } from './../services/ponto.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {
  pontoService: PontoService;
  historico: any[] = [{}];
  colunas: string[] = ['data', 'entrada', 'almoco', 'saida', 'saldo'];

  constructor(_pontoService: PontoService){
    this.pontoService = _pontoService;
  }

  ngOinInit(){
    this.historico = this.pontoService.getHistorico();
  };

}

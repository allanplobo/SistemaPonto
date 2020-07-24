import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import swal from 'sweetalert';
import { PontoService, Ponto } from '../services/ponto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css'],
})
export class PontoComponent implements OnInit {
  nomeUsuario: string;

  pontoIniciado: boolean = false;
  almocoIniciado: boolean = false;
  almocoJaFeito: boolean = false;

  tempoInicial: any;
  tempoFinal: any;

  tempoIniciaAlmoco: Date;
  tempoFinalAlmoco: Date;

  constructor(private readonly pontoService: PontoService) {}

  ngOnInit(): void {
    this.nomeUsuario = localStorage['nomeUsuario'];

    if (localStorage['pontoIniciado'] == 'true') {
      this.tempoInicial = localStorage['tempoInicial'];
      this.pontoIniciado = true;
    }

    if (localStorage['almocoIniciado'] == 'true') {
      this.tempoIniciaAlmoco = localStorage['tempoIniciaAlmoco'];
      this.almocoIniciado = true;
    }

    if (localStorage['almocoJaFeito'] == 'true') {
      this.tempoIniciaAlmoco = localStorage['tempoIniciaAlmoco'];
      this.tempoFinalAlmoco = localStorage['tempoFinalAlmoco'];
      this.almocoJaFeito = true;
      this.almocoIniciado = false;
    }
  }

  // DIA
  iniciarDia() {
    this.pontoIniciado = true;
    this.tempoInicial = new Date();

    localStorage['pontoIniciado'] = 'true';
    localStorage['tempoInicial'] = this.tempoInicial;
    localStorage['tempoIniciaAlmoco'] = null;

    swal({
      title: 'Dia iniciado!',
      icon: 'success',
    });
  }

  // ALMOÇO
  iniciarAlmoco() {
    if (this.pontoIniciado == false) {
      swal({
        title: 'Você ainda não iniciou o dia!',
        text: 'É preciso iniciar o dia para ter intervalo de almoço!',
        icon: 'error',
      });
    } else {
      this.almocoIniciado = true;

      this.tempoIniciaAlmoco = new Date();

      swal({
        title: 'Almoço Iniciado!',
        text: 'Tenha um ótimo almoço!',
        icon: 'success',
      });

      localStorage['tempoIniciaAlmoco'] = this.tempoIniciaAlmoco;
      localStorage['almocoIniciado'] = 'true';
    }
  }

  encerrarAlmoco() {
    this.almocoIniciado = false;
    this.almocoJaFeito = true;
    this.tempoFinalAlmoco = new Date();

    swal({
      title: 'Almoço Encerrado!',
      text: 'Bem-vindo de volta!',
      icon: 'success',
    });


    localStorage['almocoIniciado'] = 'false';
    localStorage['almocoJaFeito'] = 'true';
    localStorage['tempoFinalAlmoco'] = this.tempoFinalAlmoco;
  }

  encerrarDia() {
    if (this.almocoIniciado == true) {
      swal({
        title: 'Almoço em andamento!',
        text: 'Encerre o intervalo de almoço primeiro!',
        icon: 'error',
      });
    } else {
      this.pontoIniciado = false;
      this.almocoJaFeito = false;

      this.tempoFinal = new Date();

      if (localStorage['tempoIniciaAlmoco'] == "null") {
        this.tempoIniciaAlmoco = this.tempoFinal;
        this.tempoFinalAlmoco = this.tempoFinal;
      }

      const ponto = new Ponto();
      (ponto.nome = this.nomeUsuario),
        (ponto.pontoInicio = this.tempoInicial),
        (ponto.pontoFim = this.tempoFinal),
        (ponto.almocoInicio = this.tempoIniciaAlmoco),
        (ponto.almocoFim = this.tempoFinalAlmoco),
        console.log(ponto);

      this.pontoService.incluir(ponto);

      localStorage['pontoIniciado'] = 'false';
      localStorage.removeItem('tempoInicial');
      localStorage.removeItem('almocoIniciado');
      localStorage.removeItem('almocoJaFeito');
      localStorage.removeItem('tempoIniciaAlmoco');

      swal({
        title: 'Dia Encerrado!',
        text: 'Tenha um bom descanso!',
        icon: 'success',
      });
    }
  }
}

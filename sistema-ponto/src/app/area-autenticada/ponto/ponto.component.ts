import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import swal from 'sweetalert';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css'],
})
export class PontoComponent implements OnInit {
  pontoIniciado: boolean = false;
  almocoIniciado: boolean = false;
  almocoJaFeito: boolean = false;

  tempoInicialText: string;
  tempoFinalText: string;

  tempoInicial: any;
  tempoFinal: any;
  mediaDia: any;

  tempoIniciaAlmoco: string;
  tempoFinalAlmoco: string;
  mediaAlmoco: any;

  mediaTempo: any;
  mediaTempoAlmoco: any;

  constructor() {}

  ngOnInit(): void {
    if (localStorage['pontoIniciado'] == 'true') {
      this.tempoInicial = localStorage['tempoInicial'];
      this.tempoInicialText = localStorage['tempoInicialText'];
      this.pontoIniciado = true;
    }

    if (localStorage['almocoIniciado'] == "true") {
      this.tempoIniciaAlmoco = localStorage['tempoIniciaAlmoco'];
      this.almocoIniciado = true;
    }

    if (localStorage['almocoJaFeito'] == "true") {
      this.tempoIniciaAlmoco = localStorage['tempoIniciaAlmoco'];
      this.almocoJaFeito = true;
      this.almocoIniciado = false;
    }
  }

  iniciarDia() {
    this.pontoIniciado = true;
    this.tempoInicialText = moment().format('DD/MM/YYYY HH:mm');
    this.tempoInicial = moment();

    localStorage['pontoIniciado'] = 'true';
    localStorage['tempoInicial'] = this.tempoInicial;
    localStorage['tempoInicialText'] = this.tempoInicialText;

    swal({
      title: 'Dia iniciado!',
      icon: 'success',
    });
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
      this.tempoFinalText = moment().format('DD/MM/YYYY HH:mm');
      let x = moment();

      this.mediaDia = x.diff(this.tempoInicial, 'minutes');

      localStorage['pontoIniciado'] = 'false';
      localStorage.removeItem('tempoInicial');


      swal({
        title: 'Dia Encerrado!',
        text: 'Tenha um bom descanso!',
        icon: 'success',
      });
    }
  }

  iniciarAlmoco() {
    if (this.pontoIniciado == true) {
      this.almocoIniciado = true;
      let x = new Date().toLocaleString();
      this.tempoIniciaAlmoco = x;

      swal({
        title: 'Almoço Iniciado!',
        text: 'Tenha um ótimo almoço!',
        icon: 'success',
      });

      localStorage['tempoIniciaAlmoco'] = this.tempoIniciaAlmoco;
      localStorage['almocoIniciado'] = 'true';

    } else {
      swal({
        title: 'Você ainda não iniciou o dia!',
        text: 'É preciso iniciar o dia para ter intervalo de almoço!',
        icon: 'error',
      });
      return;
    }
  }

  encerrarAlmoco() {
    this.almocoIniciado = false;
    this.almocoJaFeito = true;
    let y = new Date().toLocaleString();
    this.tempoFinalAlmoco = y;

    localStorage['almocoJaFeito'] = 'true';
    localStorage['almocoIniciado'] == 'false';

    swal({
      title: 'Almoço Encerrado!',
      text: 'Bem-vindo de volta!',
      icon: 'success',
    });
  }
}

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

  teste: any;

  constructor() {}

  ngOnInit(): void {
    if (localStorage['tempoInicial'] != null) {
      this.tempoInicial = localStorage['tempoInicial'];
      this.tempoInicialText = localStorage['tempoInicialText'];
      this.pontoIniciado = true;
    }

    if (localStorage['tempoIniciaAlmoco'] != null) {
      this.tempoIniciaAlmoco = localStorage['tempoIniciaAlmoco'];
      this.almocoIniciado = true;
    }
  }

  iniciarDia() {
    this.pontoIniciado = true;
    this.tempoInicialText = moment().format('DD/MM/YYYY HH:mm');
    this.tempoInicial = moment();
    // this.tempoInicialMoment = moment(this.tempoInicial);
    localStorage['pontoIniciado'] = 'true';
    localStorage['tempoInicial'] = this.tempoInicial;
    localStorage['tempoInicialText'] = this.tempoInicialText;

    swal({
      title: 'Dia iniciado!',
      icon: 'success',
    });
  }

  encerrarDia() {
    this.pontoIniciado = false;
    this.tempoFinalText = moment().format('DD/MM/YYYY HH:mm');
    let x = moment();

    this.mediaDia = x.diff(this.tempoInicial, 'minutes');
    localStorage.removeItem('tempoInicial');
    localStorage.removeItem('pontoIniciado');

    swal({
      title: 'Dia Encerrado!',
      text: 'Você encerrou o dia em: ' + this.tempoFinalText + '! Até amanhã!',
      icon: 'success',
    });
  }

  iniciarAlmoco() {
    let o = new Date();
    console.log(o);
    if (this.pontoIniciado == true) {
      this.almocoIniciado = true;
      let x = new Date().toLocaleString();
      this.tempoIniciaAlmoco = x;
      localStorage['tempoIniciaAlmoco'] = this.tempoIniciaAlmoco;

      swal({
        title: 'Almoço Iniciado!',
        text: 'Tenha um ótimo almoço!',
        icon: 'success',
      });
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
    let y = new Date().toLocaleString();
    this.tempoFinalAlmoco = y;

    console.log(this.tempoFinalAlmoco);
    localStorage.removeItem('tempoIniciaAlmoco');

    swal({
      title: 'Almoço Encerrado!',
      text: 'Bem-vindo de volta!',
      icon: 'success',
    });
  }
}

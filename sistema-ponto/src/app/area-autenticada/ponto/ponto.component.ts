import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css']
})
export class PontoComponent implements OnInit {
  pontoIniciado: boolean = false;
  almocoIniciado: boolean = false;

  tempoInicial: string;
  tempoFinal: string;

  tempoIniciaAlmoco: any;
  tempoFinalAlmoco: any;

  mediaTempo: any;
  mediaTempoAlmoco: any;

  constructor() { }

  ngOnInit(): void {
    if(localStorage['tempoInicial'] != null){
      this.tempoInicial = localStorage['tempoInicial'];
      this.pontoIniciado = true;
    }

    if(localStorage['tempoIniciaAlmoco'] != null){
      this.tempoIniciaAlmoco = localStorage['tempoIniciaAlmoco'];
      this.almocoIniciado = true;
    }
  }

  iniciarDia(){
    this.pontoIniciado = true;
    let x = new Date();
    this.tempoInicial = x.toLocaleString();
    localStorage['tempoInicial'] = this.tempoInicial;
  }

  encerrarDia(){
    this.pontoIniciado = false;
    let x = new Date();
    this.tempoFinal = x.toLocaleString();

    localStorage.removeItem('tempoInicial');

  }

  iniciarAlmoco(){
    this.almocoIniciado = true;
    let x = new Date();
    this.tempoIniciaAlmoco = x.getDate() + '/' + (x.getMonth()+1) + '/' + x.getFullYear() + ' ' + x.getHours() + ':' + x.getMinutes();
    localStorage['tempoIniciaAlmoco'] = this.tempoIniciaAlmoco;
  }


  encerrarAlmoco(){
    this.almocoIniciado = false;
    localStorage.removeItem('tempoIniciaAlmoco');
  }

}

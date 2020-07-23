import { Injectable } from "@angular/core";


export interface colaboradores {
  data: string;
  entrada: string;
  almoco: string;
  saida: string;
  saldo: string;
}

@Injectable()
export class PontoService{

  getHistorico(){
    return [
    {
      nome: 'Allan',
      data: '23/07/2020',
      entrada: '08:06:00',
      almoco: '01:10:00',
      saida: '18:00:00',
      saldo: 'xxxxxxxx',
    },
    {
      nome: 'Geovany',
      data: '22/07/2020',
      entrada: '08:01:00',
      almoco: '01:01:00',
      saida: '18:15:00',
      saldo: 'xxxxxxxx',
    },
    {
      nome: 'José',
      data: '21/07/2020',
      entrada: '08:20:00',
      almoco: '01:00:00',
      saida: '18:10:00',
      saldo: 'xxxxxxxx',
    },
    {
      nome: 'Lorraine',
      data: '20/07/2020',
      entrada: '08:10:00',
      almoco: '00:55:00',
      saida: '17:59:00',
      saldo: 'xxxxxxxx',
    },
  ]
  }

}

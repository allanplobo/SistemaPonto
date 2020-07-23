import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface colaboradores {
  data: string;
  entrada: string;
  almoco: string;
  saida: string;
  saldo: string;
}

var ELEMENT_DATA: colaboradores[] = [
  {
    data: '23/07/2020',
    entrada: '08:06:00',
    almoco: '01:10:00',
    saida: '18:00:00',
    saldo: 'xxxxxxxx',
  },
  {
    data: '22/07/2020',
    entrada: '08:01:00',
    almoco: '01:01:00',
    saida: '18:15:00',
    saldo: 'xxxxxxxx',
  },
  {
    data: '21/07/2020',
    entrada: '08:20:00',
    almoco: '01:00:00',
    saida: '18:10:00',
    saldo: 'xxxxxxxx',
  },
  {
    data: '20/07/2020',
    entrada: '08:10:00',
    almoco: '00:55:00',
    saida: '17:59:00',
    saldo: 'xxxxxxxx',
  },
];

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css'],
})
export class RegistrosComponent {
  colaboradores = ELEMENT_DATA;
  colunas: string[] = ['data', 'entrada', 'almoco', 'saida', 'saldo'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage['token'] != 'admlogado') {
      this.router.navigate(['area-autenticada']);
    }
  }
}

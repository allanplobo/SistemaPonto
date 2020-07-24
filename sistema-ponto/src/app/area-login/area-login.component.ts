import { Component } from '@angular/core';
import {Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-area-login',
  templateUrl: './area-login.component.html',
  styleUrls: ['./area-login.component.css']
})
export class AreaLoginComponent {
  hide: boolean = true;
  admin: string[] = ['adm@adm', 'adm', 'Administrador'];
  colaborador: string[] = ['allan@allan', '2020', 'Allan']
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  constructor(private router: Router) {}
  ngOnInit(){
    if (localStorage['token'] == "admlogado" || localStorage['token'] == "colaboradorlogado"){
      this.router.navigate(['area-autenticada']);
    }
    if (localStorage['token'] == "colaboradorlogado"){
      this.router.navigate(['area-autenticada']);
    }
  }

  login(){
    if(this.email.value == this.colaborador[0] && this.senha.value == this.colaborador[1]){
      localStorage['token'] = "colaboradorlogado";
      localStorage['nomeUsuario'] = this.colaborador[2];
      this.router.navigate(['area-autenticada/ponto']);
      swal({
        title: 'Bem-vindo, ' + this.colaborador[2] + '!',
        text: 'Tenha um ótimo dia de trabalho!',
        icon: 'success',
      });
    }
    else if(this.email.value == this.admin[0] && this.senha.value == this.admin[1]){
      localStorage['token'] = "admlogado";
      localStorage['nomeUsuario'] = this.admin[2];
      this.router.navigate(['area-autenticada/ponto']);
      swal({
        title: 'Bem-vindo, ' + this.admin[2] + '!',
        text: 'Tenha um ótimo dia de trabalho!',
        icon: 'success',
      });
    }
    else{
      swal({
        title: 'Dados incorretos!',
        text: 'Verifique seu e-mail e senha e tente novamente!',
        icon: 'error',
      });
      return;
    }
  }


}

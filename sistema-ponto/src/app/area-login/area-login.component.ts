import { Component } from '@angular/core';
import {Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-area-login',
  templateUrl: './area-login.component.html',
  styleUrls: ['./area-login.component.css']
})
export class AreaLoginComponent {
  hide: boolean = true;
  admin: string[] = ['admin@admin', 'senha', 'Administrador'];
  colaborador: string[] = ['allan@allan', '2020', 'Allan']
  email = new FormControl('', [Validators.required, Validators.email]);
  senha = new FormControl('', [Validators.required]);

  constructor(private router: Router) {}
  ngOnInit(){
    if(localStorage['token'] == "colaboradorlogado"){
      this.router.navigate(['ponto']);
    }
    else if (localStorage['token'] == "admlogado"){
      this.router.navigate(['adm']);
    }
  }

  login(){
    if(this.email.value == this.colaborador[0] && this.senha.value == this.colaborador[1]){
      alert("Bem vindo, " + this.colaborador[2]);
      localStorage['token'] = "colaboradorlogado";
      this.router.navigate(['ponto']);
    }
    else if(this.email.value == this.admin[0] && this.senha.value == this.admin[1]){
      alert("Bem vindo," + this.admin[2]);
      localStorage['token'] = "admlogado";
      this.router.navigate(['ponto']);
    }
    else{
      alert("E-mail ou senha inválidos!");
      return;
    }
  }


}

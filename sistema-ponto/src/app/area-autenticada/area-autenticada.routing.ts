import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaAutenticadaComponent } from './area-autenticada.component';
import { HistoricoComponent } from './historico/historico.component';
import { PontoComponent } from './ponto/ponto.component';
import { RegistrosComponent } from './registros/registros.component';


const routes: Routes = [
  {
    path: '',
    component: AreaAutenticadaComponent,
    children: [
      {
        path: '',
        redirectTo: 'ponto',
        pathMatch: 'full',
      },
      {
        path: 'ponto',
        component: PontoComponent,
      },
      {
        path: 'historico',
        component: HistoricoComponent,
      },
      {
        path: 'registros',
        component: RegistrosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaAutenticadaRouting {}

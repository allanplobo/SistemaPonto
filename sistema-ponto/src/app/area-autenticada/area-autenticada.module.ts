import { AreaAutenticadaComponent } from './area-autenticada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PontoComponent } from './ponto/ponto.component';
import { HistoricoComponent } from './historico/historico.component';
import { RegistrosComponent } from './registros/registros.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AreaAutenticadaRouting } from './area-autenticada.routing';
import {MatButtonModule} from '@angular/material/button';
import { MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    PontoComponent,
    HistoricoComponent,
    RegistrosComponent,
    AreaAutenticadaComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    AreaAutenticadaRouting,
    MatButtonModule,
    MatTableModule
  ],
})
export class AreaAutenticadaModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AreaAutenticadaComponent } from './area-autenticada.component';
import { AreaAutenticadaRouting } from './area-autenticada.routing';
import { HistoricoComponent } from './historico/historico.component';
import { PontoComponent } from './ponto/ponto.component';
import { RegistrosComponent } from './registros/registros.component';
import { PontoService } from './services/ponto.service';

@NgModule({
  declarations: [
    PontoComponent,
    HistoricoComponent,
    RegistrosComponent,
    AreaAutenticadaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AreaAutenticadaRouting,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [PontoService],
})
export class AreaAutenticadaModule {}

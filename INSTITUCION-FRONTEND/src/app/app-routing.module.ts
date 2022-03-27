import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradoComponent } from './grado/grado.component';
import { RegistrarGradoComponent } from './registrar-grado/registrar-grado.component';
import { ActualizarGradoComponent } from './actualizar-grado/actualizar-grado.component';

const routes: Routes = [
  { path: 'grados', component: GradoComponent },
  { path: 'registrar-grado', component: RegistrarGradoComponent },
  { path: 'actualizar-grado/:id', component: ActualizarGradoComponent },
  { path: '', redirectTo: 'grados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

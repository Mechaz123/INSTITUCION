import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { GradoComponent } from './grado/grado.component';
import { RegistrarGradoComponent } from './registrar-grado/registrar-grado.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ActualizarGradoComponent } from './actualizar-grado/actualizar-grado.component';

@NgModule({
  declarations: [
    AppComponent,
    GradoComponent,
    RegistrarGradoComponent,
    HeaderComponent,
    ActualizarGradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

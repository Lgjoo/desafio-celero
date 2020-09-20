import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { SelecaoPersonagensComponent } from './components/selecao-personagens/selecao-personagens.component';
import { JogadorComponent } from './components/jogador/jogador.component';
import { PecasComponent } from './components/pecas/pecas.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    SelecaoPersonagensComponent,
    JogadorComponent,
    PecasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

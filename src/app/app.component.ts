import { Component } from '@angular/core';
import { Personagem } from './models/personagem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title: string = 'desafio-celero';
  public jogoIniciado: boolean = false;
  public abreModal: boolean = false;
  public jogador1: Personagem = null;
  public jogador2: Personagem = null;
  public jogadorVez: number;
  public pecaJogador1: number;
  public pecaJogador2: number;

  iniciarJogo(iniciar: boolean) {
    this.jogoIniciado = iniciar;
    this.abreModal = true;
  }

  setPersonagemJogador(player: {personagem: Personagem, jogador: number}): void {
    if(player.jogador == 1) {
      this.jogador1 = player.personagem;
    } else {
      this.jogador2 = player.personagem;
      this.abreModal = false;
      this.sorteiaJogadorInicial();
    }
  }

  sorteiaJogadorInicial(): void {
    this.jogadorVez = Math.round(Math.random() + 1);
    if(this.jogadorVez == 1) {
      this.pecaJogador1 = 1;
      this.pecaJogador2 = 2;
    } else {
      this.pecaJogador1 = 2;
      this.pecaJogador2 = 1;
    }
  }

  proximoJogador(): void {
    if(this.jogadorVez == 1) {
      this.jogadorVez = 2;
    } else {
      this.jogadorVez = 1;
    }
  }
}

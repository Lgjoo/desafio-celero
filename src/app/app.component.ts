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
  public jogadorVencedor: Personagem = null;
  public pecaJogador1: number;
  public pecaJogador2: number;
  public pecaVez: number;
  public qtePecaJogador1: number;
  public qtePecaJogador2: number;

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
      this.pecaJogador1 = this.pecaVez = 1;
      this.qtePecaJogador1 = 5;
      this.pecaJogador2 = 2;
      this.qtePecaJogador2 = 4;
    } else {
      this.pecaJogador1 = 2;
      this.qtePecaJogador1 = 4;
      this.pecaJogador2 = this.pecaVez = 1;
      this.qtePecaJogador2 = 5;
    }
  }

  proximoJogador(): void {
    if(this.jogadorVez == 1) {
      this.qtePecaJogador1 -= 1;
      this.jogadorVez = 2;
    } else {
      this.qtePecaJogador2 -= 1;
      this.jogadorVez = 1;
    }
    if(this.pecaVez == 1) {
      this.pecaVez = 2;
    } else {
      this.pecaVez = 1;
    }
  }

  terminoJogo(vencedor: boolean) {
    let jogador;
    if(this.jogadorVez == 1) {
      this.qtePecaJogador1 -= 1;
      jogador = this.jogador1;
    } else {
      this.qtePecaJogador2 -= 1;
      jogador = this.jogador2;
    }
    if(vencedor) {
      this.jogadorVencedor = jogador;
    } 
  }
}

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
  public vitoriasJogador1: number = 0;
  public vitoriasJogador2: number = 0;
  public mostraTelaFinal: boolean = false;
  public criaJogo: boolean = false;

  iniciarJogo(reiniciar: boolean) {
    this.criaJogo = false;
    this.jogoIniciado = true;
    this.mostraTelaFinal = false;
    this.limpaPartida();
    if(!reiniciar) {
      this.abreModal = true;
      this.jogador1 = null;
      this.jogador2 = null;
    } else {
      this.sorteiaJogadorInicial();
    }
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
    setTimeout(() => {
      this.criaJogo = true;
    }, 30);
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
      if(jogador == this.jogador1) {
        this.vitoriasJogador1 += 1;
      } else {
        this.vitoriasJogador2 += 1;
      }
    } 
    this.mostraTelaFinal = true;
  }

  limpaPartida(): void {
    this.pecaJogador1 = null;
    this.pecaJogador2 = null;
    this.qtePecaJogador1 = null;
    this.qtePecaJogador2 = null;
    this.jogadorVencedor = null;
  }
}

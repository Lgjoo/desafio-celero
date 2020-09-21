import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss']
})
export class TabuleiroComponent implements OnInit {
  private gridJogo: Array<Array<number>>;
  public jogoFinalizado: boolean = false;
  @Input() pecaVez: number;
  @Output() terminoJogoEvent = new EventEmitter<boolean>();
  @Output() proximoJogadorEvent = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    this.gridJogo = [];
    for (let i = 0; i < 3; i++) {
      this.gridJogo.push([]);
      for (let j = 0; j < 3; j++) {
        this.gridJogo[i][j] = null;
      }
    }
  }

  selecionaPosicao(linha: number, coluna: number): void {
    if(this.jogoFinalizado) {
      return;
    }

    let peca;
    if(this.pecaVez == 1) {
      peca = 'X';
    } else {
      peca = 'O';
    }

    if(document.getElementById('posicaoL'+linha+'C'+coluna).innerHTML != '') {
      return;
    }
    document.getElementById('posicaoL'+linha+'C'+coluna).innerHTML = peca;

    this.gridJogo[linha - 1][coluna - 1] = this.pecaVez;

    if(this.verificaMovimentoVencedor()) {
      this.jogoFinalizado = true;
      this.terminoJogoEvent.emit(true);
    } else {
      if(!this.verificaMovimentoDisponivel()) {
        this.jogoFinalizado = true;
        this.terminoJogoEvent.emit(false);
      } else {
        this.proximoJogadorEvent.emit();
      }
    }
  }

  verificaMovimentoVencedor(): boolean {
    if(this.verificaLinha() || this.verificaColuna() || this.verificaDiagonal()){
      return true;
    }
    return false;
  }

  verificaLinha(): boolean {
    for (let i = 0; i < 3; i++) {
      if(this.gridJogo[i][0] != null && this.gridJogo[i][1] != null && this.gridJogo[i][2] != null) {
        if(this.gridJogo[i][0] == this.gridJogo[i][1] && this.gridJogo[i][1] == this.gridJogo[i][2]) {
          return true;
        }
      }
    }
    return false;
  }

  verificaColuna(): boolean {
    for (let i = 0; i < 3; i++) {
      if(this.gridJogo[0][i] != null && this.gridJogo[1][i] != null && this.gridJogo[2][i] != null) {
        if(this.gridJogo[0][i] == this.gridJogo[1][i] && this.gridJogo[1][i] == this.gridJogo[2][i]) {
          return true;
        }
      }
    }
    return false;
  }

  verificaDiagonal(): boolean {
    if((this.gridJogo[0][0] != null && this.gridJogo[1][1] != null && this.gridJogo[2][2] != null) || (this.gridJogo[1][1] != null && this.gridJogo[0][2] != null && this.gridJogo[2][0] != null)) {
      if((this.gridJogo[0][0] == this.gridJogo[1][1] && this.gridJogo[1][1] == this.gridJogo[2][2]) || 
          (this.gridJogo[0][2] == this.gridJogo[1][1] && this.gridJogo[1][1] == this.gridJogo[2][0])) {
        return true;
      }
    }
    return false;
  }

  verificaMovimentoDisponivel(): boolean {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if(this.gridJogo[i][j] == null) {
          return true;
        }
      }
    }
    return false;
  }

}

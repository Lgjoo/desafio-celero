import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personagem } from 'src/app/models/personagem';

@Component({
  selector: 'tela-final',
  templateUrl: './tela-final.component.html',
  styleUrls: ['./tela-final.component.scss']
})
export class TelaFinalComponent implements OnInit {
  @Input() jogadorVencedor: Personagem;
  @Output() trocarPersonagensEvent = new EventEmitter<any>();
  @Output() reiniciarPartidaEvent = new EventEmitter<any>();
  @Output() limpaPartidaEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.limpaPartidaEvent.emit();
  }

  trocarPersonagens(): void {
    this.trocarPersonagensEvent.emit();
  }

  reiniciarPartida(): void {
    this.reiniciarPartidaEvent.emit();
  }

}

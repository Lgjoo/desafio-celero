import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/models/personagem';

@Component({
  selector: 'jogador',
  templateUrl: './jogador.component.html',
  styleUrls: ['./jogador.component.scss']
})
export class JogadorComponent implements OnInit {
  @Input() orientacao: string; 
  @Input() jogador: Personagem;


  constructor() { }

  ngOnInit(): void {
  }

}

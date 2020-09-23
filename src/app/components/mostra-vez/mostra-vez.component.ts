import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/models/personagem';

@Component({
  selector: 'mostra-vez',
  templateUrl: './mostra-vez.component.html',
  styleUrls: ['./mostra-vez.component.scss']
})
export class MostraVezComponent implements OnInit {
  @Input() jogador: Personagem;


  constructor() { }

  ngOnInit(): void {
  }

}

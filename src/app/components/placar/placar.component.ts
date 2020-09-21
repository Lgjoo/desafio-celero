import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.scss']
})
export class PlacarComponent implements OnInit {
  @Input() vitoriasJogador1: number;
  @Input() vitoriasJogador2: number;

  constructor() { }

  ngOnInit(): void {
  }

}

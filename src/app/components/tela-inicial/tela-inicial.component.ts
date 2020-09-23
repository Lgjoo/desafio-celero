import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})

export class TelaInicialComponent implements OnInit {

  @Output() iniciarJogoEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}

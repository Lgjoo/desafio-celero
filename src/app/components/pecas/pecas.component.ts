import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.scss']
})
export class PecasComponent implements OnInit {
  public pecas: Array<string> = [];
  @Input() tipoPeca: number;
  

  constructor() { }

  ngOnInit(): void {
    let qtePecas;
    if(this.tipoPeca == 1) {
      qtePecas = 5;
      for (let i = 0; i < qtePecas; i++) {
        this.pecas.push('X');
      }
    } else {
      qtePecas = 4;
      for (let i = 0; i < qtePecas; i++) {
        this.pecas.push('O');
      }
    }

    
  }

}

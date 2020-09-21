import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pecas',
  templateUrl: './pecas.component.html',
  styleUrls: ['./pecas.component.scss']
})
export class PecasComponent implements OnInit, OnChanges {
  public pecas: Array<string> = [];
  @Input() tipoPeca: number;
  @Input() qtePeca: number;
  

  constructor() { }

  ngOnInit(): void {
    if(this.tipoPeca == 1) {
      for (let i = 0; i < this.qtePeca; i++) {
        this.pecas.push('X');
      }
    } else {
      for (let i = 0; i < this.qtePeca; i++) {
        this.pecas.push('O');
      }
    }    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.qtePeca) {
      this.pecas.splice(this.pecas.length - 1, this.pecas.length - this.qtePeca);
    }
  }

}

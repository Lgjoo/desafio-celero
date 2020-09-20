import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title: string = 'desafio-celero';
  public jogoIniciado: boolean = false;
  public abreModal: boolean = false;

  iniciarJogo(iniciar: boolean) {
    this.jogoIniciado = iniciar;
    this.abreModal = true;
  }
}

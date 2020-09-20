import { Component, OnInit } from '@angular/core';
import { PersonagensService } from '../../services/personagens.service';
import { Personagem } from '../../models/personagem';

@Component({
  selector: 'selecao-personagens',
  templateUrl: './selecao-personagens.component.html',
  styleUrls: ['./selecao-personagens.component.scss']
})
export class SelecaoPersonagensComponent implements OnInit {
  public jogadorAtual: number = 1;
  public personagens: Array<Personagem> = [];
  public carregandoLista: boolean = false;
  public nomePersonagem: string = '';
  public personagemSelecionado: Personagem = null;
  public mostraErro: boolean = false;
  public mostraErroSelecao: boolean = false;
  
  
  constructor(private personagensService: PersonagensService) { }

  ngOnInit(): void {
    
  }

  pesquisaPersonagens(): void {
    this.carregandoLista = true;
    this.personagemSelecionado = null;
    this.mostraErroSelecao = false;
    this.personagensService.getPersonagens(this.nomePersonagem).subscribe(
      personagens => {
        if(personagens.data.results.length == 0) {
          this.mostraErro = true;
        }
        this.personagens = personagens.data.results;
        this.carregandoLista = false;
      }
    );
  }

  selecionarPersonagem(personagem: Personagem): void {
    this.mostraErroSelecao = false;
    this.personagemSelecionado = personagem;
  }

  escolherPersonagem(): void {
    if(this.personagemSelecionado) {
      this.personagens = [];
      if(this.jogadorAtual == 1) {
        this.personagemSelecionado = null;
        this.jogadorAtual = 2;
      } else {
  
      }
    } else {
      this.mostraErroSelecao = true;
    }
  }

}

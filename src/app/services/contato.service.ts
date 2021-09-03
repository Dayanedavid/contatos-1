import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly chave:string = "CONTATOS";

  constructor() { }

  getContatos():Contato[] {
    // *Tentar* carregar os dados da localStorage
    let dados = window.localStorage.getItem(this.chave);

    // Verificar se havia dados na localStorage
    if(dados){

    // Se houver dados => transformar dados em array; Retornar os array de contatos
    let contatosCarregados:Contato[] = JSON.parse(dados);
    return contatosCarregados;
    } else{
      // se não houver dados=> Guardo uma array vazia no localstorage; Retorna o array vazio
      window.localStorage.setItem(this.chave,"[]");
      return [];
    }


  }

  addContato(c:Contato): void {
     //levantar os contatos do localstorage para um array de contatos
     let contatos = this.getContatos();

     //Adicionar o contato c ao final do array
     contatos.push(c)

     //Salvar o array de volta no localstorage
     window.localStorage.setItem(this.chave,JSON.stringify(contatos))
  }

}

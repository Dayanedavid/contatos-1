import { Injectable } from '@angular/core';
import { Contato } from '../components/models/Contato';

const BASE_DE_CONTATOS:Contato[]=[ 
  { 
  nome:"Denis",
  email:"Denis.pereira@gmail.com",
  telefones: ['1111-1111','1111-1111','1111-1111',]
  },
  { 
  nome:"Denis 2",
  email:"Denis.pereira@gmail.com",
  telefones: ['2222 - 2222']
  },
  { 
  nome:"Denis 3",
  email:"Denis.pereira@gmail.com",
  telefones: ['3333 - 3333']
  },
  { 
  nome:"Denis 4",
  email:"Denis.pereira@gmail.com",
  telefones: ['4444 - 4444']
  },
  { 
  nome:"Denis 5",
  email:"Denis.pereira@gmail.com",
  telefones: ['5555 - 5555']
  },
  { 
  nome:"Denis 6",
  email:"Denis.pereira@gmail.com",
  telefones: ['6666 - 6666']
  },
  { 
  nome:"Denis 7",
  email:"Denis.pereira@gmail.com",
  telefones: ['7777 - 7777']
  },
  { 
  nome:"Denis 8",
  email:"Denis.pereira@gmail.com",
  telefones: ['8888 - 8888']
  },
  { 
  nome:"Denis 9",
  email:"Denis.pereira@gmail.com",
  telefones: ['9999 - 9999']
  },
]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseDeContatos:Contato[];
  private chave:string = "CONTATOS"

  constructor() { 

    // CARREGANDO INFORMAÇÕES NO localStorage NA CHAVE CONTATOS
    let dados = window.localStorage.getItem(this.chave);
    // VERIFICANDO SE AS INFORMAÇÕES EXISTEM
    if(dados){
      // EXISTE. TRANSFORMANDO DADOS EM ARRAY E GUARDADNDO EM BASEDECONTATOS
      this.baseDeContatos = JSON.parse(dados);
    } else{
      // NÃO EXISTE. CRIA UM ARRAY VAZIO E GUARDA NO LOCALSTORAGE
      window.localStorage.setItem(this.chave, "[]")
      // PONDO UM ARRAY VAZIO NO ATRIBUTO BASEDECONTATOS
      this.baseDeContatos = []
    }
  }

  getContatos():Contato[]{
    return this.baseDeContatos;
  }
  AddContato(c:Contato):void{
    this.baseDeContatos.push(c);
    window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos));
  }

}

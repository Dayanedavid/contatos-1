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

  constructor() { }

  getContatos():Contato[]{
    return BASE_DE_CONTATOS;
  }
  AddContato(c:Contato):void{
    BASE_DE_CONTATOS.push(c)
  }

}
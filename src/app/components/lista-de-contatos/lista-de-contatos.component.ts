import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from '../models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  public contatos:Contato[];
  private cs:ContatoService = new ContatoService();

  constructor() { 
    this.contatos = this.cs.getContatos();
  }
    

  ngOnInit(): void {
  }

}

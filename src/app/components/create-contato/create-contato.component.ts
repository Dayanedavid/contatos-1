
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from '../models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() OnCancelarClick:EventEmitter<null>= new EventEmitter()

  novoContato:Contato = {
    nome:"",
    email:"",
    telefones:[""]

  }

  cs:ContatoService =new ContatoService();

  constructor() { }

  cancelar(){
    this.OnCancelarClick.emit()
  }

  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

  addTelefone():void{
    this.novoContato.telefones.push("")
  }

  salvar(){
    this.cs.AddContato(this.novoContato);

    // Se quiser fzr a tela sumir, depois de add
    // this.OnCancelarClick.emit()

    //Manter a tela e limpar
    this.novoContato={
      nome:"",
      email:"",
      telefones:[""]
    }

  }

  removeTelefone(i:number):void{
    this.novoContato.telefones.splice(i,1)
  }
}

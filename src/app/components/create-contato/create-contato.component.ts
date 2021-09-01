
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor() { }

  cancelar(){
    this.OnCancelarClick.emit()
  }

  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

}

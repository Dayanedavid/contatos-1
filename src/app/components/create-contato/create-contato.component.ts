
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() OnCancelarClick:EventEmitter<null>= new EventEmitter()
  cancelar(){
    this.OnCancelarClick.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}

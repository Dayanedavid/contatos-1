
import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() onAddContatoClick:EventEmitter<null> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  mostrarModalClick(){
    console.log("cliquei")
    this.onAddContatoClick.emit();
  }

  sair(){
    this.onAddContatoClick.emit()
  }

}

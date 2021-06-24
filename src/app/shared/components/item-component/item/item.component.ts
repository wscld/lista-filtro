import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carro } from 'src/app/shared/models/carro.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Output()
  exibirCarro: EventEmitter<Carro> = new EventEmitter();
  @Input()
  carro!: Carro;
  exibir: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.exibir = !this.exibir;
  }

  vejaMais() {
    this.exibirCarro.emit(this.carro);
  }
}

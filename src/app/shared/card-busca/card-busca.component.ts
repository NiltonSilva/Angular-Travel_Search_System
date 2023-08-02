import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent implements OnInit {

  @Input()
  src: string = '';
  @Input()
  alt: string = '';
  @Input()
  destino: string = '';
  @Input()
  valor: string = '';

  constructor() { }

  ngOnInit(): void { }

}

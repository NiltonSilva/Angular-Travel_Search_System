import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  quantidadeAdultos: number = 0;
  quantidadeCriancas: number = 0;
  quantidadeBebes: number = 0;

  constructor() { }

  ngOnInit(): void { }

  adicionarAdulto(): number {
    return this.quantidadeAdultos++;
  }

  diminuirAdulto(): number {
    if (this.quantidadeAdultos > 0) {
      return this.quantidadeAdultos--;
    }
    return this.quantidadeAdultos;
  }

  adicionarCrianca(): number {
    return this.quantidadeCriancas++;
  }

  diminuirCrianca(): number {
    if (this.quantidadeCriancas > 0) {
      return this.quantidadeCriancas--;
    }
    return this.quantidadeCriancas;
  }

  adicionarBebe(): number {
    return this.quantidadeBebes++;
  }

  diminuirBebe(): number {
    if (this.quantidadeBebes > 0) {
      return this.quantidadeBebes--;
    }
    return this.quantidadeBebes;
  }

}

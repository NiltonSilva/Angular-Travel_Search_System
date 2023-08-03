import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ModalComponent)  // Dentro do parentese do open eu informo qual componente eu quero abrir.
  }

}

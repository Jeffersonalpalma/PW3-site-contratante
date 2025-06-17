import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  @Output() usuarioChange = new EventEmitter<any>();
forms = new FormGroup({
    Nome: new FormControl(''),
    Email: new FormControl(''),
    Telefone: new FormControl(''),
    Endereco: new FormControl(''),
    Senha: new FormControl(''),
    Usuario: new FormControl(''),
    Biografia: new FormControl(''),
  });

}

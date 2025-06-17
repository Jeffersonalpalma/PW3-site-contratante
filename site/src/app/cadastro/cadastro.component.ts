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
forms = new FormGroup({
    Nome: new FormControl(''),
    Email: new FormControl(''),
    Telefone: new FormControl(''),
    Endereco: new FormControl(''),
    Senha: new FormControl(''),
    Usuario: new FormControl(''),
    Biografia: new FormControl(''),
  });
  salvar(){
    const dados = this.forms.value;
    localStorage.setItem('dadosUsuario',
      JSON.stringify(dados));
  }

}

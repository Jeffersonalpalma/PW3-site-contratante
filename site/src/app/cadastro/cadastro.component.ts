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
rout='/cadastro';
erro:boolean=false;
forms = new FormGroup({
    Nome: new FormControl(''),
    Email: new FormControl(''),
    Telefone: new FormControl(''),
    Endereco: new FormControl(''),
    Senha: new FormControl(''),
    Usuario: new FormControl(''),
    Biografia: new FormControl(''),
  });
  verificaSalva(){
    const dados = this.forms.value;  
    if(dados.Senha != '' &&
      dados.Usuario != '' &&
      dados.Email != '' &&
      dados.Endereco != '' &&
      dados.Telefone != '' &&
      dados.Biografia != '' &&
      dados.Nome != '' 

     ){
      localStorage.setItem('dadosUsuario',
      JSON.stringify(dados)); 
      this.rout="/home";
    }
    else{
      this.erro=true;
      this.rout='/cadastro';
    }
    
  }

}

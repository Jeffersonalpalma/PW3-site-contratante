import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent
implements OnInit{
form!: FormGroup;
dadosOriginais: any;
edit:boolean=false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const dadosSalvos = localStorage.getItem('dadosUsuario');
    this.dadosOriginais = dadosSalvos ? JSON.parse(dadosSalvos) : {};

    this.form = this.fb.group({
      Nome: [this.dadosOriginais.Nome],
      Email: [this.dadosOriginais.Email],
      Telefone: [this.dadosOriginais.Telefone],
      Usuario: [this.dadosOriginais.Usuario],
      Senha: [this.dadosOriginais.Senha],
      Endereco: [this.dadosOriginais.Endereco],
      Biografia: [this.dadosOriginais.Biografia],
    });    
  }

  salvar() {
    
    this.dadosOriginais = this.form.value;
    localStorage.setItem('dadosUsuario', JSON.stringify(this.dadosOriginais));
    alert('Dados atualizados!');
    this.edit=!this.edit;
  }


editar(){
  this.edit=!this.edit;
  }

}






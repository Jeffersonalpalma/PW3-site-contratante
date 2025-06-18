import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  form!: FormGroup;
  erro:boolean=false;
  rout="";

  constructor(private fb: FormBuilder, private router: Router) {}
  dados:any;
  ngOnInit() {
    const dadosSalvos = localStorage.getItem('dadosUsuario');
    this.dados = dadosSalvos ?
    JSON.parse(dadosSalvos) : null;
    this.form = this.fb.group({
      Usuario: [''],
      Senha: ['']
    });
  }
  verificar(){
    const usuario = this.form.get('Usuario')?.value;
    const senha = this.form.get('Senha')?.value;

    if (
      usuario == this.dados.Usuario &&
      usuario!='' &&
      senha == this.dados.Senha &&
      senha!=''
    ) {
      this.rout='/home';
    } 
    
    else {
      this.erro=true;
      this.rout='';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
  implements OnInit{
    dados:any;
    ngOnInit() {
      const dadosSalvos = localStorage.getItem('dadosUsuario');
      this.dados = dadosSalvos ?
      JSON.parse(dadosSalvos) : null;

    }
}

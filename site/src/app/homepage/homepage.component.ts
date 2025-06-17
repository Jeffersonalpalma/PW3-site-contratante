import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent
implements OnInit{
dados:any;

  constructor(private fb: FormBuilder) {}
  formss:FormGroup;
  ngOnInit() {
    this.formss = this.fb.group({
      nome:[''],
      email:['']
    });
    const dadosSalvos = localStorage.getItem('dadosUsuario');
    if(dadosSalvos) {
      this.formss.patchValue(JSON.parse(dadosSalvos));
    }

  }
  edit:boolean=false;
editar(){
  this.edit=!this.edit;
  localStorage.setItem('dadosUsuario',
    JSON.stringify(this.formss.value));
  }
}


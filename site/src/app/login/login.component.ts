import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Usuario:string='sa';
  Senha:string='123456';
  Fords:FormGroup;

  constructor(private fb: FormBuilder) {
    this.Fords = this.fb.group({
      Usuario : this.fb.control(''),
      Senha : this.fb.control('')
  });
}
}

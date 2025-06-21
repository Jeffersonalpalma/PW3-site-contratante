import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-contato',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
   formContato:FormGroup;

  constructor(private fb: FormBuilder) {
    this.formContato = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required],
    });
  }

  enviarMensagem() {
  if (this.formContato.valid) {
    console.log('Mensagem enviada:', this.formContato.value);
    alert('Mensagem enviada com sucesso!');
    this.formContato.reset();

  } else {
    alert('Por favor, preencha todos os campos corretamente.');
  }
}

}

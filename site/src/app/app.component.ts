import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { HeatherComponent } from "./heather/heather.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SobreComponent, CadastroComponent, HomepageComponent, HeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'site contratante';

}

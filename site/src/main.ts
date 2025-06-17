import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { ContatoComponent } from './app/contato/contato.component';
import { HomepageComponent } from './app/homepage/homepage.component';
import { CadastroComponent } from './app/cadastro/cadastro.component';
import { SobreComponent } from './app/sobre/sobre.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: LoginComponent },

      { path: 'contato', component: ContatoComponent},

      { path: 'home', component: HomepageComponent },
      
      { path: 'cadastro', component: CadastroComponent },

      { path: 'sobre', component: SobreComponent },
    ]
  )
  ]
});
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaisierComponent } from './caisier/caisier.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AjouterPartenComponent } from './ajouter-parten/ajouter-parten.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddTransaComponent } from './add-transa/add-transa.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartenaireComponent,
    CaisierComponent,
    UtilisateurComponent,
    TransactionComponent,
    AjouterPartenComponent,
    AddUserComponent,
    AddTransaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { LoginComponent } from './login/login.component';
import { CaisierComponent } from './caisier/caisier.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AuthGuard } from './guard/auth.guard';
import { TransactionComponent } from './transaction/transaction.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AjouterPartenComponent } from './ajouter-parten/ajouter-parten.component';
import { AddTransaComponent } from './add-transa/add-transa.component';

const routes: Routes = [   
  
  { path: 'login', component: LoginComponent },
  { path: 'caisier', canActivate: [AuthGuard], component: CaisierComponent },
  { path: 'addUser', canActivate: [AuthGuard], component: AddUserComponent },
  { path: 'addTransa', canActivate: [AuthGuard], component: AddTransaComponent},
  { path: 'partenaire', canActivate: [AuthGuard] ,component: PartenaireComponent },
  { path: 'addpartenaire', canActivate: [AuthGuard], component: AjouterPartenComponent  },
  { path: 'utilisateur', canActivate: [AuthGuard], component: UtilisateurComponent },
  { path: 'transaction', canActivate: [AuthGuard], component: TransactionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

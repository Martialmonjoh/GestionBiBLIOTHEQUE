import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DocumentsComponent } from './pages/documents/documents/documents.component';
import { TableauDeBordComponent } from './pages/tableau-de-bord/tableau-de-bord.component';
import { PageUtilisateurComponent } from './pages/utilisateurs/page-utilisateur/page-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateurs/nouvel-utilisateur/nouvel-utilisateur.component';
import { NouveaudocumentComponent } from './pages/documents/nouveaudocument/nouveaudocument.component';
import { MenuComponent } from './composant/menu/menu.component';
import { ProfilComponent } from './pages/profil/profil.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/inscription', pathMatch: 'full' },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'nouveau-document',
    component: NouveaudocumentComponent
  },
  {
    path: 'tableau',
    component: TableauDeBordComponent
  },
  {
    path: 'page-utilisateurs',
    component: PageUtilisateurComponent
  },
  {
    path: 'nouveau-utilisateur',
    component: NouvelUtilisateurComponent
  },
  {
    path: 'dashboard',
    component: TableauDeBordComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  
];

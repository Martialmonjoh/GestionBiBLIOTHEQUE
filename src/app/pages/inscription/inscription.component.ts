import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { AdministrationDto, EnseignantDto, EtudiantDto, GroupeDto, UtilisateurDto } from 'src/gd-api/src/models'; 
import { EtudiantService } from '../../services/etudiant/etudiant.service';
import { EnseignantService } from '../../services/enseignant/enseignant.service';
import { AdministrationService } from '../../services/administration/administration.service';
import { GroupeService } from '../../services/groupe/groupe.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  // groupeDto: GroupeDto = {};
  // etudiantDto: EtudiantDto = {};
  // administrationDto: AdministrationDto = {};
  // enseignantDto: EnseignantDto = {};
  // profil: EtudiantDto = {};
  // user: UtilisateurDto = {};
 


  constructor(
    private etudiantService: EtudiantService,
    private enseignantService: EnseignantService,
    private administrationService: AdministrationService,
    private groupeService: GroupeService
  ){}

  ngOnInit(): void {
    
  }

  inscrire(): void{}

  isActiveField(): boolean{
    return true;
  }
}

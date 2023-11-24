import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  public menuProperties : Array<Menu> = [{
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'enssemble',
        icon: 'fas fa-chart-pie',
        url: 'vueensemble'
      }
    ]
  },
  {
    id: '2',
    titre: 'Bibliotheque',
    icon: 'fa-solid fa-folder',
    url: 'documents',
    sousMenu: [
      {
        id: '21',
        titre: 'Documents',
        icon: 'fa-solid fa-folder-open',
        url: 'documents'
      },
      {
        id: '22',
        titre: 'Fichier',
        icon: 'fa-solid fa-file',
        url: 'fichier'
      }
    ]
  },
  {
    id: '3',
    titre: 'Etudiants',
    icon: 'fa-solid fa-graduation-cap',
    url: 'etudiants',
    sousMenu: [
      {
        id: '31',
        titre: 'Etudiants',
        icon: 'fa-solid fa-graduation-cap',
        url: 'etudiants'
      },
      {
        id: '32',
        titre: 'Fichier',
        icon: 'fa-solid fa-file',
        url: 'fichier'
      }
    ]
  },
  {
    id: '4',
    titre: 'Enseignant',
    icon: 'fa-solid fa-person-chalkboard',
    url: 'enseignants',
    sousMenu: [
      {
        id: '41',
        titre: 'Enseignant',
        icon: 'fa-solid fa-person-chalkboard',
        url: 'enseignants'
      },
      {
        id: '42',
        titre: 'Fichier',
        icon: 'fa-solid fa-file',
        url: 'fichier'
      }
    ]
  },
  {
    id: '6',
    titre: 'Administration',
    icon: 'fa-solid fa-person',
    url: 'administrations',
    sousMenu: [
      {
        id: '61',
        titre: 'Administration',
        icon: 'fa-solid fa-person-chalkboard',
        url: 'administrations'
      },
      {
        id: '62',
        titre: 'Fichier',
        icon: 'fa-solid fa-file',
        url: 'fichier'
      }
    ]
  },
  {
    id: '5',
    titre: 'Parametrages',
    icon: 'fas fa-cogs',
    url: 'parametrages',
    sousMenu: [
      {
        id: '52',
        titre: 'Utilisateurs ',
        icon: 'fas fa-users-cog',
        url: 'utilisateurs'
      },
    ]
  }
  
  ];

  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit():void{

  }
  
  navigate(menu: Menu): void{
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu = menu;
  }
}

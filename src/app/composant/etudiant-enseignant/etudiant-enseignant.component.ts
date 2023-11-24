import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-enseignant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant-enseignant.component.html',
  styleUrl: './etudiant-enseignant.component.scss'
})
export class EtudiantEnseignantComponent {
  origin?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.origin = data['origin'];
    });
  }  

  save(): void{

  }

  cancel(): void{
    if(this.origin === 'etudiant'){
      this.router.navigate(['etudiants']);
    }else if(this.origin === 'enseignant'){
      this.router.navigate(['ensignants']);
    }else if(this.origin === 'administration'){
      this.router.navigate(['administrations']);
    }
  }

}

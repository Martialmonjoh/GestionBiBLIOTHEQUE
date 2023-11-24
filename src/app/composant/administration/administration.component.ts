import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {
  
  origin?: string;

  constructor(
    private router: Router
    ){}

  ngOnInit(): void{
  }

  nouvelAdministration(): void{
    this.router.navigate(['nouveladministration']);
  }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['administrations']);
  }
}

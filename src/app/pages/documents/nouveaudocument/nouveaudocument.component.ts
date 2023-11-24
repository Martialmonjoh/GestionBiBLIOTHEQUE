import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveaudocument',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nouveaudocument.component.html',
  styleUrl: './nouveaudocument.component.scss'
})
export class NouveaudocumentComponent {
  constructor(
    private router: Router
    ){}

    ngOnInit(): void {
      
    }

  save(): void{

  }

  cancel(): void{
    this.router.navigate(['documents']);
  }
}

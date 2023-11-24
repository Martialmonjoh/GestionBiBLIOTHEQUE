import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bouttons-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouttons-actions.component.html',
  styleUrl: './bouttons-actions.component.scss'
})
export class BouttonsActionsComponent {
  @Input()
  isNouveauVisible = true;
  @Input()
  isUploaderVisible = true;
  @Input()
  isTelechargerVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  constructor(){}  

  ngOnInit(): void{

  }

  bouttonNouveauClick(): void{
    this.clickEvent.emit();
  }
}

import { StoryLine } from './main.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: 'escena.component.html',
  styleUrls: ['escena.component.css'],
})
export class EscenaComponent {
  currentSentence: number = 0;

  prev(): number {
    return this.currentSentence--;
  }

  next(): number {
    return this.currentSentence++;
  }

  @Input() storylines: StoryLine[] = [];
  
  ngOnInit(): void {}
}

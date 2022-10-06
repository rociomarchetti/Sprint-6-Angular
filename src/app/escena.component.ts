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
    if (this.currentSentence > 0) {
      this.currentSentence--;
    }
    return this.currentSentence;
  }

  next(): number {
    if (this.currentSentence < this.storylines.length) {
      this.currentSentence++;
    }
    return this.currentSentence;
  }

  @Input() storylines: StoryLine[] = [];

  ngOnInit(): void {}
}
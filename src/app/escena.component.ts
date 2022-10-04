import { StoryLine } from './main.interface';
import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-escena',
    templateUrl: 'escena.component.html'
})

export class EscenaComponent {
    
    @Input() storylines: StoryLine[] = [];
} 
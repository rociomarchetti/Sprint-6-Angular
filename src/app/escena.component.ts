import { StoryLine } from './main.interface';
import {Component, Input} from '@angular/core'

@Component({
    selector: 'app-escena',
    templateUrl: 'escena.component.html',
    styleUrls: ['escena.component.css']
})

export class EscenaComponent {
    
    @Input() storylines: StoryLine[] = [];

} 
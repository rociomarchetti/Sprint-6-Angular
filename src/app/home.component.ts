import { Component } from '@angular/core';
import { EscenaComponent } from './escena.component';
import { StoryLine } from './main.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  isActive: boolean = false;

  start(): boolean {
    this.isActive = true;
    return this.isActive;
  }

  storylines: StoryLine[] = [
    {
      action:
        'El nostre heroi estava surant per lespai sideral quan a la llunyania va albirar una nau espacial',
    },
    {
      action:
        'Sentia curiositat per linterior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.',
    },
    {
      action: 'Lheroi va decidir travessar la porta que el portava a casa',
    },
    {
      action:
        'Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...',
    },
  ];
}

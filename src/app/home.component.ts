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
      txt:
        'El nostre heroi estava surant per lespai sideral quan a la llunyania va albirar una nau espacial',
      img: '1.jpg'
    },
    {
      txt:
        'Sentia curiositat per linterior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.',
      img: '2.jpg'
    },
    {
      txt: 'Lheroi va decidir travessar la porta que el portava a casa',
      img: '3.jpg'
    },
    {
      txt:
        'Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...',
      img: '4.jpg'
    },
  ];
}

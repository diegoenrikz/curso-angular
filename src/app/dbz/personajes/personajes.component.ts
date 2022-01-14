import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input('data') se puede definir un nombre para el input y cambiar el valor en el componente html
  /*@Input()
  personajes: Personaje[] = [];*/

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {

  }
}

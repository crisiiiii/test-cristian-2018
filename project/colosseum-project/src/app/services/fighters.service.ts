import { Injectable } from '@angular/core';
import { FIGHTERS } from '../mock/fighters';
import { Fighters } from '../interfaces/fighter.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class FightersService {
  constructor() { }

  /**
   * Get all list of fighters
   */
  getFighters(): Observable<Fighters[]> {
    return of(FIGHTERS);
  }

  removeFighter(fighterId: number): Observable<Fighters[]> {
    const fighterFound = FIGHTERS.find((fighter: Fighters) => fighterId === fighter.id );
    FIGHTERS.splice(FIGHTERS.indexOf(fighterFound), 1);
    return of(FIGHTERS);
  }
}

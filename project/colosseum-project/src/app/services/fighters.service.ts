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

  /**
   * Update the selected fighter
   * @param fighterId
   */
  updateFighter(fighter: Fighters) {
    const fighterFound = FIGHTERS.find((fighterMock: Fighters) => fighterMock.id === fighter.id );
    const index = FIGHTERS.indexOf(fighterFound);
    FIGHTERS[index].name = fighter.name;
    FIGHTERS[index].surname = fighter.surname;
    FIGHTERS[index].wins = fighter.wins;
    FIGHTERS[index].lost = fighter.lost;
    return of(FIGHTERS);
  }

  /**
   * Remove the selected fighter
   * @param fighterId
   */
  removeFighter(fighterId: number): Observable<Fighters[]> {
    const fighterFound = FIGHTERS.find((fighter: Fighters) => fighterId === fighter.id );
    FIGHTERS.splice(FIGHTERS.indexOf(fighterFound), 1);
    return of(FIGHTERS);
  }
}

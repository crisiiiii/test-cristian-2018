import { Injectable } from '@angular/core';
import { FIGHTERS } from '../mock/fighters';
import { Fighters } from '../interfaces/fighter.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class FightersService {
  /**
   * ID to add to the new fighters
   */
  private id: number = FIGHTERS.length + 1;

  constructor() { }

  /**
   * Get all list of fighters
   */
  getFighters(): Observable<Fighters[]> {
    return of(FIGHTERS);
  }

  /**
   * Get selected fighter
   */
  getFighter(data: string): Observable<Fighters> {
    const fighterId: number = Number(data);
    const fighterFound = FIGHTERS.find((fighterMock: Fighters) => fighterMock.id === fighterId );
    return of(fighterFound);
  }

  /**
   * Add a new fighter on the list
   */
  addFighter(fighter: Fighters) {
    fighter.id = this.id++;
    FIGHTERS.push(fighter);
    return of();
  }

  /**
   * Update the selected fighter
   * @param fighterId
   */
  updateFighter(fighter: Fighters): Observable<Fighters[]> {
    const fighterFound = FIGHTERS.find((fighterMock: Fighters) => fighterMock.id === fighter.id );
    if (fighterFound) {
      const index = FIGHTERS.indexOf(fighterFound);
      FIGHTERS[index].name = fighter.name;
      FIGHTERS[index].surname = fighter.surname;
      FIGHTERS[index].wins = fighter.wins;
      FIGHTERS[index].lost = fighter.lost;
      FIGHTERS[index].date = fighter.date;
      FIGHTERS[index].titles = (fighter.titles) ? fighter.titles : '';
      FIGHTERS[index].free = (fighter.free) ? fighter.free : false;
      return of(FIGHTERS);
    }
    return;
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

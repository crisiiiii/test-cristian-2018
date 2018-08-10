import { Injectable } from '@angular/core';
import { FIGHTERS } from '../mock/fighters';
import { Fighters } from '../interfaces/fighter.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class FightersService {
  constructor() { }

  getFighters(): Observable<Fighters[]> {
    return of(FIGHTERS);
  }
}

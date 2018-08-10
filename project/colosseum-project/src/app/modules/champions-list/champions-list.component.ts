import { Component, OnInit } from '@angular/core';
import { Fighters } from '../../interfaces/fighter.interface';
import { FightersService } from '../../services/fighters.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent implements OnInit {

  /**
   * List of fighters
   */
  fightersList: Fighters[];

  constructor(private fightersAPI: FightersService) {
  }

  ngOnInit() {
    this.getAllFighters();
  }

  /**
   * Get all fighters
   */
  private getAllFighters() {
    this.fightersAPI.getFighters().subscribe(
      (response: Fighters[]) => {
        this.fightersList = response;
      },
      (error: any) => console.log(error)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Fighters } from '../../interfaces/fighter.interface';
import { FightersService } from '../../services/fighters.service';

const TYPE_WINS = 'wins';
const TYPE_LOST = 'lost';
const TYPE_REFRESH = 'refresh';

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
   * Order fighters by Lost
   */
  orderFighters(orderType: String) {
    this.fightersList = this.fightersList.sort(function (a, b) {
      switch (orderType) {
        case TYPE_LOST: return (b.lost - a.lost);
        case TYPE_WINS: return (b.wins - a.wins);
        case TYPE_REFRESH: return (b.id - b.id);
      }
    });
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

import { Component, OnInit } from '@angular/core';
import { Fighters } from '../../interfaces/fighter.interface';
import { FightersService } from '../../services/fighters.service';

@Component({
  selector: 'app-edit-fighters',
  templateUrl: './edit-fighters.component.html',
  styleUrls: ['./edit-fighters.component.css']
})
export class EditFightersComponent implements OnInit {

  /**
   * Fighter data from form component
   */
  selectedFighter: Fighters;

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
   * Update the data fighter to mock
   * @param data Fighter data from form
   */
  updateDataFighter(fighter: Fighters) {
    this.fightersAPI.updateFighter(fighter).subscribe(
      () => {
        // this.showAlert('Your update action has been done successfully!');
      },
      (error: any) => console.log(error)
    );
  }

  /**
   * Get data of fighter selected
   * @param fighterId
   */
  getDataFighter(fighterId: string) {
    this.fightersAPI.getFighter(fighterId).subscribe(
      (fighter: Fighters) => {
        this.selectedFighter = fighter;
        // this.showAlert('Your update action has been done successfully!');
      },
      (error: any) => console.log(error)
    );
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

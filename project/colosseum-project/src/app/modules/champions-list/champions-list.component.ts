import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fighters } from '../../interfaces/fighter.interface';
import { FightersService } from '../../services/fighters.service';

const TYPE_WINS = 'wins';
const TYPE_LOST = 'lost';

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

  /**
   * Forms of every fighter row
   */
  fighterTableForm: FormGroup;

  /**
   * Message to show in alert
   */
  alertMessage: string;

  /**
   * Toggle to show/hide alert
   */
  showSuccessAlert: boolean;

  /**
   * Save the fighters which are beeing edited
   */
  private editionModeArray: number[] = [];

  constructor(private fightersAPI: FightersService, private formBuilder: FormBuilder) {
    this.fighterTableForm = this.formBuilder.group({
      fighterDetails: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.getAllFighters();
    this.createFormBuilder();
  }

  /**
   * Order fighters by Lost
   */
  orderFighters(orderType: String) {
    this.fightersList = this.fightersList.sort(function (a, b) {
      switch (orderType) {
        case TYPE_LOST: return (b.lost - a.lost);
        case TYPE_WINS: return (b.wins - a.wins);
      }
    });
  }

  /**
   * Check if fighters is editing
   * @param fighterId
   */
  editionMode(fighterId: number) {
    const fighter = this.editionModeArray.find((id: number) => id === fighterId );
    return (fighter) ? true : false;
  }

  /**
   * Add to edition mode
   * @param fighterId
   */
  editFighter(fighterId: number) {
    this.editionModeArray.push(fighterId);
  }

  /**
   * Save the simple edition of the fighter
   * @param fighterId
   */
  saveEdition(fighterId: number) {
    console.log(this.fighterTableForm.controls.fighterDetails);
  }

  /**
   * Cancel the edition of the fighter
   * @param fighterId
   */
  cancelEdition(fighterId: number) {
    const index = this.editionModeArray.indexOf(fighterId, 0);
    if (index > -1) {
      this.editionModeArray.splice(index, 1);
    }
  }

  /**
   * Remove fighter from the list
   * @param fighterId
   */
  removeFighter(fighterId: number) {
    this.fightersAPI.removeFighter(fighterId).subscribe(
      (response: Fighters[]) => {
        this.fightersList = response;
        this.showAlert('Your removing action has been done successfully!');
      },
      (error: any) => console.log(error)
    );
  }

  /**
   * Manage the success alert
   * @param message message to show
   */
  private showAlert(message: string) {
    this.showSuccessAlert = false;
    this.alertMessage = message;
    this.showSuccessAlert = true;
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

  /**
   * Initialize a FormGroup to every fighter in the list
   */
  private createFormBuilder() {
    this.fighterTableForm = this.formBuilder.group({
      fighterDetails: this.formBuilder.array(
        this.fightersList.map((fighter: Fighters) => this.formBuilder.group({
          id: [fighter.id],
          name: [fighter.name, [Validators.required, Validators.minLength(2)]],
          surname: [fighter.surname, [Validators.required, Validators.minLength(2)]],
          wins: [fighter.wins, [Validators.required, Validators.minLength(1)]],
          lost: [fighter.lost, [Validators.required, Validators.minLength(1)]]
        }))
      )
    });
  }
}

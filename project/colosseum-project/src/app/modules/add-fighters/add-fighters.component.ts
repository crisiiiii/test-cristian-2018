import { Component, OnInit } from '@angular/core';
import { Fighters } from '../../interfaces/fighter.interface';
import { FightersService } from '../../services/fighters.service';

@Component({
  selector: 'app-add-fighters',
  templateUrl: './add-fighters.component.html',
  styleUrls: ['./add-fighters.component.css']
})
export class AddFightersComponent implements OnInit {

  /**
   * Fighter data from form component
   */
  fighterData: Fighters;

  /**
   * Message to show in alert
   */
  alertMessage: string;

  /**
   * Toggle to show/hide alert
   */
  showSuccessAlert: boolean;

  constructor(private fightersAPI: FightersService) {
  }

  ngOnInit() {
  }

  /**
   * Add the data fighter to mock
   * @param data Fighter data from form
   */
  addDataFighter(fighter: Fighters) {
    this.fightersAPI.addFighter(fighter).subscribe(
      () => {},
      (error: any) => console.log(error),
      () => {
        this.showAlert('Your fighter has been added successfully!');
      }
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
}

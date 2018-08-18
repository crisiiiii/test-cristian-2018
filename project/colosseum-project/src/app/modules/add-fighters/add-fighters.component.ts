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
      () => {
        // this.showAlert('Your update action has been done successfully!');
      },
      (error: any) => console.log(error)
    );
  }
}

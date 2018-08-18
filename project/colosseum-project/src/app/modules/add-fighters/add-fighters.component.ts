import { Component, OnInit } from '@angular/core';
import { Fighters } from '../../interfaces/fighter.interface';
import { FightersService } from '../../services/fighters.service';

@Component({
  selector: 'app-add-fighters',
  templateUrl: './add-fighters.component.html',
  styleUrls: ['./add-fighters.component.css']
})
export class AddFightersComponent implements OnInit {

  constructor(private fightersAPI: FightersService) {
  }

  ngOnInit() {
  }
}

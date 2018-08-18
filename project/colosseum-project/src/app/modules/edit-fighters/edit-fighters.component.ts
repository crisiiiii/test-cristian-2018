import { Component, OnInit } from '@angular/core';
import { Fighters } from '../../interfaces/fighter.interface';
import { FightersService } from '../../services/fighters.service';

@Component({
  selector: 'app-edit-fighters',
  templateUrl: './edit-fighters.component.html',
  styleUrls: ['./edit-fighters.component.css']
})
export class EditFightersComponent implements OnInit {

  constructor(private fightersAPI: FightersService) {
  }

  ngOnInit() {
  }
}

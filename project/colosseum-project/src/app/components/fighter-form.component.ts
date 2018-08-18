import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fighters } from '../interfaces/fighter.interface';

@Component({
  selector: 'app-fighter-form',
  templateUrl: './fighter-form.component.html',
  styleUrls: ['./fighter-form.component.css']
})
export class FighterFormComponent implements OnInit, OnChanges {

  /**
   * Fighter selected
   */
  @Input() selectedFighter: Fighters;

  /**
   * Data form of fighter
   */
  @Output() dataFighter = new EventEmitter();

  /**
   * Fighter form group
   */
  fighterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.selectedFighter.currentValue) {
      this.setFighterData();
    }
  }

  /**
   * Form submit function
   */
  submit() {
    if (!this.fighterForm.valid) {
    } else {
      this.dataFighter.emit(this.fighterForm.value);
    }

  }

  /**
   * Set data of the fighter selected in form
   */
  private setFighterData() {
    this.fighterForm.controls['id'].setValue(this.selectedFighter.id);
    this.fighterForm.controls['name'].setValue(this.selectedFighter.name);
    this.fighterForm.controls['surname'].setValue(this.selectedFighter.surname);
    this.fighterForm.controls['wins'].setValue(this.selectedFighter.wins);
    this.fighterForm.controls['lost'].setValue(this.selectedFighter.lost);
    this.fighterForm.controls['date'].setValue(this.selectedFighter.date);
    this.fighterForm.controls['titles'].setValue(this.selectedFighter.titles);
    this.fighterForm.controls['free'].setValue(this.selectedFighter.free);
  }

  /**
   * Build the fighter form group
   */
  private buildForm() {
    this.fighterForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      wins: ['', [Validators.required, Validators.minLength(1)]],
      lost: ['', [Validators.required, Validators.minLength(1)]],
      date: [this.getDate()],
      titles: ['', []],
      free: ['', [Validators.required]]
    });
  }

  /**
   * Return the today date
   */
  private getDate(): String {
    const today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return mm + '-' + dd + '-' + yyyy;
  }
}

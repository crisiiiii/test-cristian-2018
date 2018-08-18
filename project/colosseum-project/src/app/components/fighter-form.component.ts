import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fighter-form',
  templateUrl: './fighter-form.component.html',
  styleUrls: ['./fighter-form.component.css']
})
export class FighterFormComponent implements OnInit {

  /**
   * Form type could be add or update fighter
   */
  @Input() formType: string;

  @Output() dataFighter = new EventEmitter();

  /**
   * Fighter form group
   */
  fighterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
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
   * Build the fighter form group
   */
  private buildForm() {
    this.fighterForm = this.formBuilder.group({
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
    return mm + '/' + dd + '/' + yyyy;
  }
}

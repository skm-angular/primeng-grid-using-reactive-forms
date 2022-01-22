import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss'],
})
export class CustomGridComponent implements OnInit {
  fg: FormGroup;
  @Input() gridHeaders: any[] = [];
  @Input() data: any[] = [];
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({});
    this.createForm();
  }

  ngOnInit(): void {}

  /**
   * Initializes the Form & by default adds an empty row to the PRIMENG TABLE
   */
  private createForm(): void {
    this.fg = this.fb.group({
      rows: this.fb.array([this.createTableRow()]),
    });
  }

  /**
   * Returns the FormGroup as a Table Row
   */
  private createTableRow(): FormGroup {
    return this.fb.group({
      name: new FormControl('awdawd', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      }),
    });
  }

  get rows(): FormArray {
    return this.fg.get('rows') as FormArray;
  }
}
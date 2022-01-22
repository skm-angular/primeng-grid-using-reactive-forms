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
  @Input() fg: FormGroup;
  @Input() formArrayName = 'rows';
  @Input() dataKey = 'id';
  @Input() headers: any[] = [];
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
    this.fg.addControl(this.formArrayName, this.fb.array([]));
  }

  /**
   * Returns the FormGroup as a Table Row
   */
  private createRow(): FormGroup {
    const fg = this.fb.group({});
    this.headers.forEach((header) => {
      fg.addControl(
        header.controlName,
        this.fb.control(header.defaultValue || null)
      );
    });
    return fg;
  }

  get rows(): FormArray {
    return this.fg.get('rows') as FormArray;
  }

  addNewRow(): void {
    this.rows.push(this.createRow());
  }

  onDeleteRow(rowIndex: number): void {
    this.rows.removeAt(rowIndex);
  }

  save() {
    console.log(this.fg);
  }
}
